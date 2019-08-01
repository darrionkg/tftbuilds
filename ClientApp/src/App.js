import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import {GetData} from './components/GetData';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={GetData} />
      </Layout>

    );
  }
}
