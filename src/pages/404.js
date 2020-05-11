import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="text-center pt-5">
      <h1 className="text-danger mt-5">Ой, сталась помилка</h1>
      <h2 className="text-danger mt-5">Сторінку не знайдено</h2>
      <AniLink fade to="/" className="btn btn-outline-dark text-uppercase mt-5">
        Повернутись на головну сторінку
      </AniLink>
    </div>
  </Layout>
)

export default NotFoundPage
