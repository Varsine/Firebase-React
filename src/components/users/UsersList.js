import React from "react"
import {compose} from "redux"
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import Loading from "../help component/Loading"
import {Link} from "react-router-dom"
import {removeUser} from "../store/action/authAction"
import close from "../image/Close-icon.png"
import update from "../image/Update-icon.png"

class UsersList extends React.Component {
  render() {
    const clients = this.props.clients
    return (
      <div className="users-form">
        <h1>List of employees</h1>
        {!clients ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Balance ($)</th>
                <th>Updating Data </th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{client.firstName}</td>
                  <td>{client.lastName}</td>
                  <td>
                    <Link to={"/user/" + client.id}>{client.email}</Link>{" "}
                  </td>

                  <td>{client.balance}</td>
                  <td>
                    <Link to={"/update/" + client.id}>
                      <button className="update-icon">
                        <img alt="update" src={update} />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.removeUser(client.id)}
                      className="close-icon"
                    >
                      <img alt="close" src={close} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    clients: state.firestore.ordered.client,
  }
}
const mapDispatchToProps = (dispatch) => ({
  removeUser: (id) => dispatch(removeUser(id)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{collection: "client"}])
)(UsersList)
