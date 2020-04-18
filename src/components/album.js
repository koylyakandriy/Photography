import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import Loading from "./Global/loading"

const Album = () => {
  const [album, setAlbum] = useState({})

  useEffect(() => {
    let data = localStorage.getItem("album")

    if (!data) return
    setAlbum(JSON.parse(data))
  }, [])

  console.log("album:", album === undefined)
  console.log("album:", typeof album)
  console.log("album:", Object.keys(album).length === 0)

  return (
    <section className="album pt-4">
      {!Object.keys(album).length == 0 && album !== undefined ? (
        <div className="container">
          <article>
            <h2 className="text-center">{album.title}</h2>
            <p className="py-3">{album.description.description}</p>
          </article>

          <div className="row">
            {album.images.map((img, index) => (
              <div className="col-12 mx-auto mb-3" key={index}>
                <Img fluid={img.fluid} srcSet={img.fluid} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default Album
