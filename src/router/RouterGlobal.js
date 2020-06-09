import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from '../views/home/HomePage'
import HomeDetailPage from '../views/homeDetail/HomeDetailPage'
import AboutPage from '../views/about/AboutPage'
import BookPage from '../views/book/BookPage'
import UserPage from '../views/user/UserPage'

export default class RouterGlobal extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact render={()=><Redirect to="/index" />} />
          <Route path="/index" component={HomePage} />
          <Route path="/about" exact render={() => {return <AboutPage />}} />
          <Route path="/book" exact render={() => {return <BookPage />}} />
          <Route path="/topic/:id" exact component={HomeDetailPage} />
          <Route path="/user/:id" exact render={(props) => {return <UserPage {...props} />}} />
          <Route render={() => <div>页面飞走啦</div>} />
        </Switch>
      </div>
    )
  }
}
