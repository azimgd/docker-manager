import React, { Component } from 'react';
import ContainerStore from '../../stores/ContainerStore';

import Alerts from '../shared/alerts';
import List from './sub/list';
import Show from './sub/show';
import Create from './sub/create';
import Start from './sub/start';

import cssmodules from 'react-css-modules';
import styles from './container.styl';

class Container extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.getContainers = this.getContainers.bind(this);
    this.startContainer = this.startContainer.bind(this);
    this.stopContainer = this.stopContainer.bind(this);
    this.restartContainer = this.restartContainer.bind(this);
    this.createContainer = this.createContainer.bind(this);
    this.removeContainer = this.removeContainer.bind(this);
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

  startContainer(containerId, cfg = {}) {
    ContainerStore.startContainer(containerId, cfg);
  }

  stopContainer(containerId) {
    ContainerStore.stopContainer(containerId);
  }

  restartContainer(containerId) {
    ContainerStore.restartContainer(containerId);
  }

  createContainer(cfg) {
    ContainerStore.createContainer(cfg);
  }

  removeContainer(containerId) {
    ContainerStore.removeContainer(containerId);
  }

  render() {
    return (
      <div>
        <Alerts
          errors={this.state.errors}
          msgs={this.state.msgs}
        />

        {this.props.route.action === 'containers.show' ?
          <Show
            container={this.state.container}
            stopContainer={this.stopContainer}
            restartContainer={this.restartContainer}
            removeContainer={this.removeContainer}
          />
        : null}

        {this.props.route.action === 'containers.create' ?
          <Create
            imageId={this.props.params.imageId}
            createContainer={this.createContainer}
          />
        : null}

        {this.props.route.action === 'containers.start' ?
          <Start
            container={this.state.container}
            startContainer={this.startContainer}
          />
        : null}

        {this.props.route.action === 'containers.all' ?
          <List
            containers={this.state.containers}
            getContainers={this.getContainers}
            stopContainer={this.stopContainer}
            restartContainer={this.restartContainer}
            removeContainer={this.removeContainer}
          />
        : null}
      </div>
    );
  }
}

Container.propTypes = {
  route: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
};

export default cssmodules(Container, styles);
