import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import Filter from "./filter"
import { Link } from "@reach/router"
import Loading from "./Global/loading"

const getCategories = albums => {
  return ["all", ...Array.from(new Set(albums.map(album => album.node.events)))]
}

const PortfolioComponent = ({ albums }) => {
  const [allAlbums, setAllAlbums] = useState(null)
  const [sortedAlbums, setSortedAlbums] = useState(null)
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    setAllAlbums(albums.edges)
    setSortedAlbums(albums.edges)
    setCategories(getCategories(albums.edges))
  }, [albums.edges])

  const handleItems = category => {
    let tempItems = [...allAlbums]

    if (category === "all") {
      setSortedAlbums(tempItems)
    } else {
      const items = tempItems.filter(({ node }) => node.events === category)
      setSortedAlbums(items)
    }
  }

  const setAlbum = node => {
    localStorage.setItem("album", JSON.stringify(node))
  }

  return (
    <section className="portfolio pt-4">
      {allAlbums && allAlbums.length > 0 ? (
        <section className="container">
          <Filter categories={categories} handleItems={handleItems} />

          <div className="row">
            {sortedAlbums.map(({ node }) => {
              const slug = node.title.replace(" ", "-").toLowerCase()
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 mx-auto mb-3 mb-md-5"
                  key={node.id}
                >
                  <div className="img-container overflow-hidden position-relative">
                    <Img
                      fluid={node.images[0].fluid}
                      alt="albums"
                      className="image"
                    />
                    <button
                      onClick={() => setAlbum(node)}
                      className="btn-custom text-capitalize position-absolute"
                    >
                      <Link to={`/portfolio/${slug}`}>Show more</Link>
                    </button>
                  </div>
                  <h4 className="text-capitalize text-center mt-2 font-weight-lighter">
                    {node.title}
                  </h4>
                </div>
              )
            })}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default PortfolioComponent
