import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/shared/layout';
import Container from './components/container/index';
import Image from './components/image/index';

import ContainerStore from './stores/ContainerStore';
import ContainerActions from './actions/ContainerActions';

const onEnter = {
  containers: {
    all: (state, transition) => {
      ContainerActions.setDefaultStatus();
      ContainerStore.getContainers();
    },

    show: (state, transition) => {
      ContainerActions.setDefaultStatus();
      ContainerStore.getContainer(state.params.id);
    },

    create: (state, transition) => {
      ContainerActions.setDefaultStatus();
    }
  },
};

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="containers/create/:imageId" component={Container} onEnter={onEnter.containers.create} action="containers.create" />
          <Route path="containers/:id" component={Container} onEnter={onEnter.containers.show} action="containers.show" />
          <Route path="containers" component={Container} onEnter={onEnter.containers.all} action="containers.all" />
          <Route path="images" component={Image} action="images.all" />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
