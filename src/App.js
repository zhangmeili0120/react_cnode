import React, { Component } from 'react';
import "./App.less";
import MyHeader from './views/MyHeader';
import MyFooter from './views/MyFooter';
import RouterGlobal from './router/RouterGlobal';

export default class App extends Component {
  render() {
    return (
      <div className="app_page">
        <MyHeader />
        <main>
          <RouterGlobal />
        </main>
        <MyFooter />
      </div>
    )
  }
}
