import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

// styles
import "assets/css/bootstrap.min.css"
import "assets/scss/paper-kit.scss?v=1.2.0"
import "assets/demo/demo.css?v=1.2.0"

// others

import themeRoutes from "routes"

const getRoutes = () => {
  return themeRoutes.map((prop, key) => (
    <Route path={prop.path} key={key} component={prop.component} />
  ))
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {getRoutes()}
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
)
