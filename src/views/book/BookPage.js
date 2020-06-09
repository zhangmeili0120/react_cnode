import React, { Component } from 'react'
import data from './data'
import CardTemplate from '../CardTemplate'

export default function BookPage() {
  return (
    <div>
      <CardTemplate data={data}/>
    </div>
  )
}
