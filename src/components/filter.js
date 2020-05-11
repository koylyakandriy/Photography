import React from "react"

const Filter = ({categories, handleItems}) => {
  return (
    <div className="row mb-2">
      <div className="col-12 mx-auto text-center">
        {categories &&
        categories.map(category => (
          <button
            key={category}
            onClick={() => handleItems(category)}
            type="button"
            className="btn text-capitalize"
          >
            <small>{category}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
