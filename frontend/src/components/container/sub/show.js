import React, { Component } from 'react';

import cssmodules from 'react-css-modules';
import styles from '../container.styl';

class Show extends Component {
  render() {
    const container = this.props.container;
    const startContainer = this.props.startContainer;
    const stopContainer = this.props.stopContainer;
    const restartContainer = this.props.restartContainer;
    const removeContainer = this.props.removeContainer;

    if (Object.keys(container).length === 0) {
      return <div></div>;
    }

    return (
      <div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Name</div>
          <div styleName="Info-field-text">
            {container.Name}
          </div>
        </div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Actions</div>
          <div styleName="Info-field-text">
            {container.State.Running ?
              <div>
                <button onClick={stopContainer.bind(this, container.Id)}>stopContainer</button>
                <button onClick={restartContainer.bind(this, container.Id)}>restartContainer</button>
              </div>
            :
              <div>
                <button onClick={startContainer.bind(this, container.Id)}>startContainer</button>
                <button onClick={removeContainer.bind(this, container.Id)}>removeContainer</button>
              </div>
            }
          </div>
        </div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Container ID</div>
          <div styleName="Info-field-text">
            {container.Id}
          </div>
        </div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">State</div>
          <div styleName="Info-field-text">
            {container.State.Status}
          </div>
        </div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Created at</div>
          <div styleName="Info-field-text">
            {container.State.StartedAt}
          </div>
        </div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Mounts</div>
          <div styleName="Info-field-text">
            {JSON.stringify(container.Mounts)}
          </div>
        </div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Env</div>
          <div styleName="Info-field-text">
            {container.Config.Env}
          </div>
        </div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Binds</div>
          <div styleName="Info-field-text">
            {container.HostConfig.Binds}
          </div>
        </div>

        <div styleName="Info-scrollable">
          <div styleName="Info-field-title">Logs</div>
          <div styleName="Info-field-text">
            <pre>{ JSON.stringify(container, null, 2) }</pre>
          </div>
        </div>
      </div>
    );
  }
}

Show.propTypes = {
  container: React.PropTypes.object.isRequired,
  startContainer: React.PropTypes.func.isRequired,
  stopContainer: React.PropTypes.func.isRequired,
  restartContainer: React.PropTypes.func.isRequired,
  removeContainer: React.PropTypes.func.isRequired,
};

export default cssmodules(Show, styles);
