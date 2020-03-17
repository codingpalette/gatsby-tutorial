import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>footer 영역 입니다. {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
