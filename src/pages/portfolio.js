import React from "react"
import { Router } from "@reach/router"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioComponent from "../components/portfolioComponent"
import Album from "../components/album"

export const getAlbumList = graphql`
  {
    albums: allContentfulPhotoAlbums {
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
    <SEO title="PortfolioComponent" />

    <Router>
      <PortfolioComponent path="/portfolio" albums={data.albums} />
      <Album path="/portfolio/:slug" />
    </Router>
  </Layout>
)

export default PortfolioPage
