import userImg from "../../help component/image/user.webp"

export const createUser = (user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    firestore
      .collection("client")
      .add({
        ...user,
        // photoURL: userImg,
        authorBalance: 0.0,
        authorTime: new Date(),
      })
      .then(() => {
        dispatch({type: "CREATE_USER", user})
      })
      .catch((err) => {
        dispatch({type: "CREATE_USER_ERROR", err})
      })
  }
}
