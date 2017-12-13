import React, { Component } from 'react'
import { Card, Form, Input, Icon, Button } from 'antd'
import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import './index.less'

const FormItem = Form.Item

@Form.create()
class Register extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log(value)
        this.props.dispatch(routerRedux.push('/register/success'))
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div className='register-container'>
        <Card className='register-container-card'>
          <div className='register-container-card-title'>竹林茶香-注册</div>
          <Form className='register-container-card-form'>
            <FormItem label='用户名'>
              {getFieldDecorator('userName', {
                rules: [{request: true, message: '请输入您的用户名'}]
              })(<Input className='login-container-form-input' prefix={<Icon type='user' />}
                        placeholder='请输入您的用户名' />)}
            </FormItem>
            <FormItem label='邀请码'>
              {getFieldDecorator('inviteCode', {
                rules: [{request: true, message: '请输入您的邀请码'}]
              })(<Input className='login-container-form-input' prefix={<Icon type='smile-o' />}
                        placeholder='请输入您的12位邀请码' />)}
            </FormItem>
            <FormItem label='密码'>
              {getFieldDecorator('password', {
                rules: [{request: true, message: '请输入密码'}]
              })(<Input className='login-container-form-input' type='password' prefix={<Icon type='lock' />}
                        placeholder='请输入密码（6~18位）' />)}
            </FormItem>
            <FormItem label='确认密码'>
              {getFieldDecorator('re-password', {
                rules: [{request: true, message: '请再次输入密码'}]
              })(<Input className='login-container-form-input' type='password' prefix={<Icon type='lock' />}
                        placeholder='请再次输入密码（6~18位）' />)}
            </FormItem>
            <Button
              className='register-container-card-form-btn'
              htmlType='submit'
              type='primary' onClick={this.handleSubmit}>注册</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default connect(({app}) => ({app}))(Register)
