import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolioComponent"

export const getAlbumList = graphql`
  {
    albums: allContentfulPhotoAlbums(sort: {fields: [createdAt], order: DESC}) {
      edges {
        node {
          id
          title
          events
          description {
            description
          }
          images {
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

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Портфоліо" />
      <Portfolio path="/portfolio" albums={data.albums} />
  </Layout>
)

export default PortfolioPage
