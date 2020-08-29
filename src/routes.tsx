import React from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'

import MasterClass from './components/MasterClass'

function Routes() {
  return (
    <MasterClass>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </MasterClass>
  )
}

export default Routes
