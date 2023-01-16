import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Brandon Hales Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        {/* adds a month/day/year/hour/minute/second/AM/PM */}
      </div>
    );
  }
}
