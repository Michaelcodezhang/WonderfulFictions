import React, { Component } from 'react'
import { Button, Form, Modal, Icon, Input, message } from 'antd'
import { Link } from 'dva-react-router-3/router'
import { connect } from 'dva-react-router-3'
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
    this.asyncLogin = this.asyncLogin.bind(this)
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

  asyncLogin = async function (values) {
    const data = await this.props.dispatch({
      type: 'app/login',
      payload: {
        userName: values.userName,
        password: values.password
      }
    })
    if (data.code === 0) {
      message.success('登录成功')
      localStorage.setItem("userData",JSON.stringify({
        userName: values.userName,
        password: values.password
      }))
    } else if (data.code === 1001) {
      message.error('不存在该用户！')
    } else if (data.code === 1002) {
      message.error('密码错误！')
    } else {
      message.warning('未知错误')
    }
    this.props.dispatch({type: 'app/isLogin', userData:data.data})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          visible: false
        })
        this.asyncLogin(values)
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
          width='400px'
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

export default connect(({app}) => ({app}))(Login)
