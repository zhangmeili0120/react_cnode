import React, { Component } from 'react'
import {Card} from 'antd';

export default class CardTemplate extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
      {
        data.map((item, index) => {
          return  (<Card
            key={index}
            title={item.title}
            type="inner"
            className={item.className}
          >
            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
          </Card>)
        })
      }
    </div>)
  }
}
