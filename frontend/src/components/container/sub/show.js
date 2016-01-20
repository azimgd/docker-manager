import React, { Component } from 'react';

export default class Show extends Component {
  render() {
    return (
      <pre>
          { JSON.stringify(this.props, null, '  ') }
      </pre>
    );
  }
}
