import React from "react"

const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
          <div className="lds-heart">
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
