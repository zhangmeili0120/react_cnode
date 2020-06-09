import React, { Component } from 'react'
import data from './data'
import CardTemplate from '../CardTemplate'

export default class BookPage extends Component {
  render() {
    return (
      <div>
        <CardTemplate data={data}/>
      </div>
    )
  }
}
