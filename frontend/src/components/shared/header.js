import React, { Component } from 'react';
import { Link } from 'react-router';

import cssmodules from 'react-css-modules';
import styles from './header.styl';

class Header2 extends Component {
  render() {
    return (
      <div styleName="header">
        <ul styleName="nav">
          <li><Link to="/containers">Containers</Link></li>
          <li><Link to="/images">Images</Link></li>
        </ul>
      </div>
    );
  }
}

export default cssmodules(Header2, styles);
