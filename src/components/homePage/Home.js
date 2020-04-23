import React from "react"
import firebaseImage from "../image/firebase-image.jpg"
import logo from "../image/firebase.png"

const Home = () => {
  const handlerClick = () => {
    window.location.href = "https://console.firebase.google.com/"
  }
  return (
    <div className="home-page">
      <img src={firebaseImage} alt="" />
      <div className="home-header">
        <img src={logo} alt="" />
        <h4>Firebase</h4>
      </div>
      <div className="enter-firebase">
        <button onClick={handlerClick}>+</button>
        <p>Go Firebase</p>
      </div>
    </div>
  )
}
export default Home
