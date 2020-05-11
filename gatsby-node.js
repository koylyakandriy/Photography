/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const { data } = await graphql(`
    query {
      albums: allContentfulPhotoAlbums {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  
  data.albums.edges.forEach(({ node }) => {
    const slug = node.title.replace(" ", "-").toLowerCase()
    createPage({
      path: `portfolio/${slug}`,
      component: path.resolve("./src/templates/portfolio-template.js"),
      context: {
        slug: node.title,
      },
    })
  })
}

