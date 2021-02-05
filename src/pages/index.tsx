import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import {
  HeroSection,
  Schedule,
  SEO,
  UnderlineAnimation,
  Navbar,
} from "../components"
import "./styles.css"

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const IndexPage = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  })

  return (
    <div>
      <SEO title="Multiverso" />
      <HeroSection />
      <Navbar />

      {isLoading ? (
        <LoadingWrapper>
          <UnderlineAnimation color={"#FF7077"} inView screen />
        </LoadingWrapper>
      ) : (
        <Schedule />
      )}
    </div>
  )
}

export default IndexPage
