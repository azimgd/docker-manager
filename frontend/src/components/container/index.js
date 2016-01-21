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
  }

  componentWillUnmount() {
    ContainerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  getContainers() {
    ContainerStore.getContainers();
  }

  fetchContainer(containerId) {
    ContainerStore.getContainer(containerId);
  }

  startContainer(containerId) {
    ContainerStore.startContainer(containerId);
  }

  stopContainer(containerId) {
    ContainerStore.stopContainer(containerId);
  }

  render() {
    return (
      <div>
        {this.state.errors.map((error) =>
          <div key={uuid.v1()}>{error}</div>
        )}

        {this.props.params.id ?
          <Show
            container={this.state.container}
          />
        : null}

        {!this.props.params.id ?
          <List
            containers={this.state.containers}
            getContainers={this.getContainers.bind(this)}
            startContainer={this.startContainer.bind(this)}
            stopContainer={this.stopContainer.bind(this)}
          />
        : null}
      </div>
    );
  }
}

Container.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default CSSModules(Container, styles);
