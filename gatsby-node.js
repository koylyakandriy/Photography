/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/portfolio/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.

    createPage({
      path: "/portfolio",
      matchPath: "/portfolio/*",
      component: path.resolve(`src/pages/portfolio.js`),
    })
  }
}
