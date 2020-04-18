import React from "react"

const Contact = () => (
  <section className="contact pt-4">
    <div className="container">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/xrgadroo" method="POST">
            <div className="form-group">
              <label htmlFor="name">Ім'я</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Ім'я"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="+38 099 999 99 99"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Опис</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="6"
                placeholder="Ваша опис"
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-dark btn-block text-capitalize mt-5"
            >
              Відправити
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
