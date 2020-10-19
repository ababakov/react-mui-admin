import React from 'react'
import { Page } from 'pages/Page'
import { NotFound } from 'pages/NotFound'
import { Switch, Route } from 'react-router-dom'
import { MainContainer } from 'containers/MainContainer'

export const PrivateAppPages: React.FC = () => {
  return (
    <MainContainer>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="*" component={NotFound} />
      </Switch>
    </MainContainer>
  )
}
