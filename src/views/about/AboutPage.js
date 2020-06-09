import React, { Component } from 'react'
import data from './data'
import CardTemplate from '../CardTemplate'

export default function AboutPage() {
  return (
    <div>
      <CardTemplate data={data}/>
    </div>
  )
}