import React, { Component } from 'react';

import Header from './header';

import cssmodules from 'react-css-modules';
import styles from './layout.styl';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />

        {this.props.children}
      </div>
    );
  }
}

export default cssmodules(Layout, styles);
