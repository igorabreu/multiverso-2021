import React from "react"
import { useInView } from "react-intersection-observer"

import getRandomColors from "../../utils/getRandomColor"
import { UnderlineAnimation } from "../../components"
import { data } from "./data"
import {
  Wrapper,
  Title,
  Activities,
  Spot,
  Details,
  Date,
  Participant,
  Time,
  ActivityTitle,
  Day,
} from "./styles"

const Schedule = () => {
  let [ref, inView] = useInView()

  const onClickDetails = url => {
    if (url === "") return
    window.open(url)
  }

  return (
    <Wrapper id="schedule">
      <Title>Programação</Title>

      <Activities ref={ref}>
        {data.map(({ date, activities }) => {
          const color = getRandomColors()
          return (
            <Day>
              <Date>{date}</Date>
              <UnderlineAnimation color={color} inView={inView} />
              {activities.map(({ name, participant, time, details, link }) => {
                return (
                  <Spot>
                    <ActivityTitle color={color}>{name}</ActivityTitle>
                    <Participant>{participant}</Participant>
                    <Time>{time}</Time>
                    <Details onClick={() => onClickDetails(link)}>
                      {details}
                    </Details>
                  </Spot>
                )
              })}
            </Day>
          )
        })}
      </Activities>
    </Wrapper>
  )
}

export default Schedule
