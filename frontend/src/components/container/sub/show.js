import React, { Component } from 'react';

class Show extends Component {
  render() {
    return (
      <pre>
          { JSON.stringify(this.props, null, '  ') }
      </pre>
    );
  }
}

Show.propTypes = {
};

export default Show;
