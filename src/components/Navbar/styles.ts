import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 440px;
  height: 30px;
  background: #fff;
  color: #000;
  padding: 5px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 40px;

  @media (max-width: 500px) {
    display: none;
  }
`

export const Item = styled.div`
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`