import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { setDocumentTitle } from '../utils/utils'
import Index from '../views/index/index'

const querystring = require('querystring')

const routes = [
  {
    path: '/index',
    meta: {
      name: '首页'
    },
    component: Index
  }
]

// 解析url query参数
function parseUrlSearch (search) {
  if (!search) {
    return {}
  }
  const queryStr = search.split('?')[1]
  return querystring.parse(queryStr)
}

function RouteWithSubRoutes (route) {
  setDocumentTitle(route.meta.name)

  return (
    <Route
      path={route.path}
      render={props => {
        // eslint-disable-next-line react/prop-types
        props.location.searchParams = parseUrlSearch(props.location.search)
        return (
          <route.component {...props} routes={route.routes}/>
        )
      }}/>
  )
}

export default function RouterView () {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        {
          routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))
        }
      </Switch>
    </Router>
  )
}
