import React, { Component } from 'react';
import ContainerStore from '../../stores/ContainerStore';

import Alerts from '../shared/alerts';
import List from './sub/list';
import Show from './sub/show';

import cssmodules from 'react-css-modules';
import styles from './container.styl';

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
        <Alerts
          errors={this.state.errors}
          msgs={this.state.msgs}
        />

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
  params: React.PropTypes.object.isRequired,
};

export default cssmodules(Container, styles);
