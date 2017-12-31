import React, { Component } from 'react'
import { Card, Form, Input, Icon, Button, message } from 'antd'
import { routerRedux } from 'dva-react-router-3/router'
import { connect } from 'dva-react-router-3'
import './index.less'

const FormItem = Form.Item

@Form.create()
class Register extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
  }

  checkPassword (rule, value, callback) {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不一致！')
    } else {
      callback()
    }
  }

  asyncLogin = async function (values) {
    const data = await this.props.dispatch({
      type: 'app/login',
      payload: {
        userName: values.userName,
        password: values.password
      }
    })
    if (data.code === 0) {
      localStorage.setItem("userData",JSON.stringify({
        userName: values.userName,
        password: values.password
      }))
    } else {
      message.warning('未知错误,请自行登录')
    }
    this.props.dispatch({type: 'app/isLogin', userData:data.data})
  }

  asyncRegister = async function(values){
    const data = await this.props.dispatch({
      type:'app/register',
      payload:{
        userName: values.userName,
        password: values.password,
        inviteCode: values.inviteCode
      }
    })
    if (data.code === 0) {
      message.success('注册成功')
      this.asyncLogin(values)
      this.props.dispatch(routerRedux.push('/home'))
    } else if (data.code === 1001) {
      message.error('该用户名已存在！')
    } else if (data.code === 1002) {
      message.error('邀请码不正确！')
    } else {
      message.warning('未知错误')
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, value) => {
      if (!err) {
        this.asyncRegister(value)
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
                rules: [{required: true, message: '请输入您的用户名'}]
              })(<Input className='login-container-form-input' prefix={<Icon type='user'/>}
                        placeholder='请输入您的用户名'/>)}
            </FormItem>
            <FormItem label='邀请码'>
              {getFieldDecorator('inviteCode', {
                rules: [{required: true, message: '请输入您的12位邀请码', len: 12}]
              })(<Input className='login-container-form-input' prefix={<Icon type='smile-o'/>}
                        placeholder='请输入您的12位邀请码'/>)}
            </FormItem>
            <FormItem label='密码'>
              {getFieldDecorator('password', {
                rules: [{required: true, message: '请输入正确长度的密码', min: 6, max: 12}]
              })(<Input className='login-container-form-input' type='password' prefix={<Icon type='lock'/>}
                        placeholder='请输入密码（6~12位）'/>)}
            </FormItem>
            <FormItem label='确认密码'>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '请再次输入密码'
                }, {
                  validator: this.checkPassword
                }]
              })(<Input className='login-container-form-input' type='password' prefix={<Icon type='lock'/>}
                        placeholder='请再次输入密码（6~18位）'/>)}
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
