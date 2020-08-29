import React from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'

import Main from './containers/Main'

function Routes() {
  return (
    <Main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Main>
  )
}

export default Routes
