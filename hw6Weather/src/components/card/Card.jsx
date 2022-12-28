import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
            <h3>дата {this.props.item?.dt_txt}</h3>
            <h3>погода {this.props.item?.weather?.[0].description}</h3>
      </div>
    )
  }
}
