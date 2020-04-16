import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {Provider} from "react-redux"
import {reduxFirestore, getFirestore} from "redux-firestore"
import thunk from "redux-thunk"
import {createStore, applyMiddleware, compose} from "redux"
import firebaseConfig from "./components/config/firebaseConfig"
import rootReducer from "./components/store/reducer/rootReducer"
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase"
import firebase from "firebase/app"
import {createFirestoreInstance} from "redux-firestore"

//store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebaseConfig)
  )
)

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
)
