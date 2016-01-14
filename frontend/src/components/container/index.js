import React, { Component } from 'react';
import ContainerStore from '../../stores/ContainerStore';
import ContainerActions from '../../actions/ContainerActions';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = ContainerStore.getState();
  }

  componentDidMount() {
    ContainerStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    ContainerStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  fetchContainers() {
    ContainerActions.getContainers([123,123123,123123]);
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchContainers.bind(this)}>Get them</button>
        {this.state.containers.map((container) => {
          return <div>{container}</div>;
        })}
      </div>
    );
  }
}
