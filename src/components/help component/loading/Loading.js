import React from "react"
import loading from "../image/loading.gif"

function Loading() {
  return (
    <div>
      <img className="loding-img" alt="loding..." src={loading} />
    </div>
  )
}

export default Loading
