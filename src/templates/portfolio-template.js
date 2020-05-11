import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import {FaRegArrowAltCircleUp} from 'react-icons/fa';

import SEO from "../components/seo"
import Layout from "../components/layout"
import Loading from "../components/Global/loading"

const PortfolioTemplate = ({ data }) => {
  const {
    title,
    description: { description },
    images,
  } = data.album.edges[0].node

  const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Layout>
      <SEO title={capitalizeFirstLetter(title)} description={description}/>

      <section className="album pt-4">
        {data ? (
          <div className="container">
            <article>
              <h2 className="text-center text-capitalize">{title}</h2>
              <p className="py-3">{description}</p>
            </article>

            <div className="row">
              {images.map((img, index) => (
                <div className="col-12 mx-auto mb-3" key={index}>
                  <Img fluid={img.fluid} srcSet={img.fluid} />
                </div>
              ))}
  
              <button className="arrow" onClick={scrollTo}>
                <FaRegArrowAltCircleUp />
              </button>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    album: allContentfulPhotoAlbums(filter: { title: { eq: $slug } }) {
      edges {
        node {
          title
          description {
            description
          }
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default PortfolioTemplate
