import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper"
import {connectedRouterRedirect} from "redux-auth-wrapper/history4/redirect"
import Loading from "./Loading"

const locationHelper = locationHelperBuilder({})

export const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  AuthenticatingComponent: Loading,
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/sign-in",
  authenticatingSelector: ({firebase: {auth, profile, isInitializing}}) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({firebase: {auth}}) => auth.isLoaded && !auth.isEmpty,
})

export const UserIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsNotAuthenticated",
  AuthenticatingComponent: Loading,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/",
  authenticatingSelector: ({firebase: {auth, isInitializing}}) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({firebase: {auth}}) => auth.isLoaded && auth.isEmpty,
})
