import React from 'react'
import PropTypes from 'prop-types'
import { Route, RouteProps, Redirect } from 'react-router-dom'

export const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const authenticated = true
  return authenticated ? <Route {...rest} component={component} /> : <Redirect to="/login" />
}

PrivateRoute.propTypes = { component: PropTypes.any }
