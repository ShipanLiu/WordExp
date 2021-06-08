import React, { PureComponent } from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import './App.css'


export default class App extends PureComponent {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </>
    )
  }
}
