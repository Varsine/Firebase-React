import React from "react"
import {NavLink} from "react-router-dom"
import {signOut} from "../store/action/authAction"
import {connect} from "react-redux"

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create"> New User</NavLink>
      </li>
      <li>
        <NavLink to="/Firebase-React/" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
