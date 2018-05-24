import { Component } from 'react';
import React from 'react';

import { render } from 'react-dom';

export const fuck = (param) => {
  console.log('fuck you here', param || 'Trump');
  return false;
}

export class ReactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }

  render() {
    console.log('trigger render in ReactApp');

    return (<div>fuck you Trump</div>);
  }
}

export { render } from 'react-dom';