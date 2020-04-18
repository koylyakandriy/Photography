import React from "react"
import { graphql } from "gatsby"

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <About data={data.description} />
  </Layout>
)

export default IndexPage
