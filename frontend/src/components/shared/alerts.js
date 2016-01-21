import React, { Component } from 'react';
import uuid from 'uuid';

import cssmodules from 'react-css-modules';
import styles from './alerts.styl';

class Alerts extends Component {
  render() {
    const errors = this.props.errors.filter(str => str && str.length > 0);
    const msgs = this.props.msgs.filter(str => str && str.length > 0);

    return (
      <div>
        {errors.length > 0 ?
          <div styleName="errors">
            {errors.map((error) =>
              <div key={uuid.v1()}>{error}</div>
            )}
          </div>
        : null }

        {msgs.length > 0 ?
          <div styleName="msgs">
            {msgs.map((msg) =>
              <div key={uuid.v1()}>{msg}</div>
            )}
          </div>
        : null }
      </div>
    );
  }
}

Alerts.propTypes = {
  errors: React.PropTypes.array,
  msgs: React.PropTypes.array,
};

export default cssmodules(Alerts, styles);
