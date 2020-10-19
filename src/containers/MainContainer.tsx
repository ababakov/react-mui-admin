import React from 'react'
import PropTypes from 'prop-types'

export const MainContainer: React.FC = ({ children }) => {
  return <>{children}</>
}

MainContainer.propTypes = { children: PropTypes.node }
