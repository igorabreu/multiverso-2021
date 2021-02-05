import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
  0% {
    max-width: 0px;
  }

  100% {
    max-width: 400px;
  }
`

export const Underline = styled.div<{ color?: string, inView?: boolean; screen?: boolean }>`
  height: 3px;
  max-width: ${p => p.screen ? '100vw' : '400px'} ;
  background-color: ${p => p.color};
  margin-bottom: 30px;
  animation: ${p => p.inView ? fadeIn : null} ${p => p.screen ? '2s' : '1s'} cubic-bezier(0.25, 1, 0.5, 1);
`