import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '@/components/Layout'
import PriceList from '@/pages/PriceList'
import Add from '@/pages/Add'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <PriceList />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
