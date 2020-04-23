import React from "react"
import {Link} from "react-router-dom"
import SignedInLinks from "./SignedInLink"
import SignedOutLinks from "./SignedOutLink"
import {connect} from "react-redux"
import logo from "../image/firebase.png"

const Navbar = (props) => {
  const {auth, profile} = props
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  )
  return (
    <nav className="nav-wrapper gray darken-3">
      <div className="container">
        <Link to="/Firebase-React/" className="brand-logo">
          <img className="home-img" src={logo} alt="home-img" />
        </Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar)
