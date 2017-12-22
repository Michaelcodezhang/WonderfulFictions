import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Card } from 'antd'
import './index.less'

class Grid extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    // console.log(this.props.content.id)
  }

  render () {
    const classRouter = '/classify/' + this.props.content.id
    return (
      <Card className='grid-container' onClick={this.handleClick}>
        <Link to={classRouter}>{this.props.content.text}</Link>
      </Card>
    )
  }
}

export default Grid
