import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import './index.less'

class RegisterSuccess extends Component {
  componentWillMount () {
    setTimeout(() => {
      this.props.dispatch(routerRedux.push('/home'))
    }, 1000)
  }

  render () {
    return (
      <div className='register-container' style={{height: '598px'}} />
    )
  }
}

export default connect(({app}) => ({app}))(RegisterSuccess)
