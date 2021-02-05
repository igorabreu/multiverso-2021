import React, { FunctionComponent } from "react"
import { Underline } from "./styles"

interface IProps {
  color: string
  inView: boolean
  screen?: boolean
}

const UnderlineAnimation: FunctionComponent<IProps> = ({
  color,
  inView,
  screen,
}) => {
  return <Underline color={color} inView={inView} screen={screen} />
}

export default UnderlineAnimation
