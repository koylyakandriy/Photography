import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

export const getDescription = graphql`
  {
    description: allContentfulPhotoDescription {
      edges {
        node {
          id
          fullDescription {
            fullDescription
            json
          }
          avatar {
            fluid {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Про мене" />
    <StaticQuery
      query={getDescription}
      render={({ description }) => <About data={description} />}
    />
  </Layout>
)

export default IndexPage
