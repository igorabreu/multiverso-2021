import React, { FunctionComponent } from "react"
//@ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Wrapper, Item } from "./styles"

const Navbar: FunctionComponent = () => {
  const openTab = url => {
    window.open(url)
  }

  return (
    <Wrapper id="navbar">
      <AnchorLink href="#schedule">
        <Item>Programação</Item>
      </AnchorLink>
      <Item
        onClick={() =>
          openTab(
            "https://multiverso-docs.s3-sa-east-1.amazonaws.com/multiverso-1a-edicao.pdf"
          )
        }
      >
        Publicação/Livro
      </Item>
      <Item onClick={() => openTab("https://2018.multiverso.cc")}>
        Edição anterior
      </Item>
    </Wrapper>
  )
}

export default Navbar
