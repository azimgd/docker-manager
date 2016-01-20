import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/shared/layout';
import Container from './components/container/index';
import Image from './components/image/index';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="containers" component={Container}/>
          <Route path="containers/:id" component={Container}/>
          <Route path="images" component={Image}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
