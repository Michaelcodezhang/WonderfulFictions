import React, { Component } from 'react'
import { Button, Form, Modal, Icon, Input } from 'antd'
import { Link } from 'dva/router'
import './index.less'

const ButtonGroup = Button.Group
const FormItem = Form.Item

@Form.create()
class Login extends Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  showModal () {
    this.setState({
      visible: true
    })
  }

  handleCancel () {
    this.setState({
      visible: false
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.setState({
          visible: false
        })
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <ButtonGroup>
          <Button type='dash' onClick={this.showModal}>登录</Button>
          <Button type='dash'><Link to='/register'>注册</Link></Button>
        </ButtonGroup>
        <Modal
          title='竹林茶香-登录'
          width='30%'
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          className='login-container'>
          <Form className='login-container-form' onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{request: true, message: '请输入您的用户名'}]
              })(<Input className='login-container-form-input' prefix={<Icon type='user' />}
                        placeholder='请输入您的用户名' />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{request: true, message: '请输入您的密码'}]
              })(<Input className='login-container-form-input' type='password' prefix={<Icon type='lock' />}
                        placeholder='请输入您的密码（6~18位）' />)}
            </FormItem>
            <Button className='login-container-submit' type='primary' htmlType='submit'>登录</Button>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Login
