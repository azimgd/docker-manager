import React, { Component } from 'react';
import ContainerStore from '../../stores/ContainerStore';
import ContainerActions from '../../actions/ContainerActions';
import uuid from 'uuid';

import List from './sub/list';
import Show from './sub/show';

import CSSModules from 'react-css-modules';
import styles from './container.css';

class Container extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = ContainerStore.getState();
  }

  componentDidMount() {
    ContainerStore.listen(this.onChange);

    if(this.props.params.id) {
      this.fetchContainer(this.props.params.id);
    } else {
      this.fetchContainers();
    }
  }

  componentWillUnmount() {
    ContainerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  fetchContainers() {
    ContainerStore.getContainers();
  }

  fetchContainer(containerId) {
    ContainerStore.getContainer(containerId);
  }

  render() {
    if(this.props.params.id) {
      return (
        <Show
          container={this.state.container}
        />
      );
    }

    else {
      return (
        <List
          containers={this.state.containers}
          fetchContainers={this.fetchContainers.bind(this)}
        />
      );
    }
  }
}

export default CSSModules(Container, styles);
