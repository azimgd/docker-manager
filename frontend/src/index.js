import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/shared/layout';
import Container from './components/container/index';
import Image from './components/image/index';

import ContainerStore from './stores/ContainerStore';

const onEnter = {
  containers: {
    all: (state, transition) => {
      ContainerStore.getContainers();
    },

    show: (state, transition) => {
      ContainerStore.getContainer(state.params.id);
    }
  },
};

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="containers" component={Container} onEnter={onEnter.containers.all}/>
          <Route path="containers/:id" component={Container} onEnter={onEnter.containers.show}/>
          <Route path="images" component={Image}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
