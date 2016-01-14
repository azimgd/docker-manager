import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Container from './components/container/index';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}/>
        <Route path="/containers" component={Container}/>
        <Route path="/images" component={Container}/>
      </Router>
    );
  }
}
