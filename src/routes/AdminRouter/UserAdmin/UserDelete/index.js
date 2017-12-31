import React, { Component } from 'react'
import { Form, Input, Icon, Button, Popconfirm } from 'antd'

const FormItem = Form.Item

@Form.create()
class UserDeletePage extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label='被删账户用户名'>
            {getFieldDecorator('userName', {
              rules: [{required: true, message: '请输入要删除的用户名称'}]
            })(<Input prefix={<Icon type='user'/>} style={{width: '400px'}} placeholder='请您输入要删除账号的用户名'/>)}
          </FormItem>
          <FormItem label='个人登录密码'>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入您的登录密码'}]
            })(<Input type='password' prefix={<Icon type='lock'/>} style={{width: '400px'}} placeholder='请输入您的登录密码'/>)}
          </FormItem>
          <FormItem label='超级管理员密码'>
            {getFieldDecorator('superPassword', {
              rules: [{required: true, message: '请输入您的超级管理员密码'}]
            })(<Input type='password' prefix={<Icon type='lock'/>} style={{width: '400px'}}
                      placeholder='请输入您的超级管理员密码'/>)}
          </FormItem>
          <FormItem>
            <Button type='primary' htmlType='submit'>提交操作</Button>
          </FormItem>
        </Form>
        请注意：本页面属于超级管理员权限内容，请谨慎操作
      </div>
    )
  }
}

export default UserDeletePage
