import React, { useEffect, useState, Fragment } from "react"
import Img from "gatsby-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Loading from "./Global/loading"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const About = ({ data }) => {
  const [about, setAbout] = useState({})

  useEffect(() => {
    setAbout(data.edges)
  }, [data.edges])

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

  return (
    <section className="about pt-4">
      {about ? (
        <div className="container">
          {about && about.length > 0 && (
            <div className="row">
              {about.map(({ node }) => (
                <Fragment key={node.id}>
                  <div className="col-10 col-md-5 mx-auto mx-3 mb-md-0">
                    <Img fluid={node.avatar.fluid} />
                  </div>
                  <div className="col-10 col-md-7 mx-auto">
                    {documentToReactComponents(
                      node.fullDescription.json,
                      options
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default About
