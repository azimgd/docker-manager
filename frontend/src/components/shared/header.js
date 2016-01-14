import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/containers">Containers</Link></li>
          <li><Link to="/images">Images</Link></li>
        </ul>
      </div>
    );
  }
}
