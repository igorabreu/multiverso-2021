import styled from '@emotion/styled'

export const Wrapper = styled.div`
  min-height: 500px;
  padding: 80px;
  box-sizing: border-box;
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #5577a1;
  text-align: center;
`

export const Activities = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-row-gap: 80px;
  grid-column-gap: 100px;
  margin-top: 60px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Spot = styled.div`
  margin-bottom: 40px;
  font-size: 12px;
`

export const Details = styled.div`
  margin-top: 15px;
  text-decoration: underline;
  cursor: pointer;
`

export const Date = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
`

export const Participant = styled.div`
  margin-top: 15px;
`

export const Time = styled.div`
`



export const ActivityTitle = styled.div<{ color?: string }>`
  font-weight: bold;
  position: relative;

  &:before {
    content: '';
    width: 7px;
    height: 7px;
    position: absolute;
    left: -15px;
    top: 5px;
    border-radius: 50%;
    background-color: ${p => p.color};
  }
`


export const Day = styled.div`
`



// color: rgba(255, 0, 255, 1);
// color: rgba(0, 255, 255, 1) ;
// "#8e9eca"
// "#5577a1"
// "#b1f4d5"
// "a0f9fc#"
// "#43e8d6"
// "#68c4e8
// "#b1f4d5"