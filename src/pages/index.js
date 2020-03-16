import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>hello</h1>
      <p>lorem fsdfsdfsdsddsfsdfsdf</p>
      <div>
        <a href="/contact">컨텍트 바로가기</a>
      </div>
      <div>
        <Link to="/contact">컨텍트 바로가기2</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )
