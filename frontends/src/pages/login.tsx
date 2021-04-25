import React, { Component, createRef, RefObject } from 'react'
import { Form, FormInstance, Input, Button, Space, message } from 'antd'
import { set, get } from '../utils/storage'
import '../static/css/login.css'
import login from '../api/login'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Login extends Component {
    formRef: RefObject<FormInstance>

    constructor(props: any, contest: any) {
        super(props, contest);
        this.formRef = createRef<FormInstance>();
    }

    login = (form: any) => {
        login(form.name, form.password)
            .then(response => {
                const { code, msg, data } = response.data
                if (code === 0) {
                    set('token', data.token)
                    window.location.href = '/'
                    message.success(msg)
                } else {
                    message.error(msg)
                }
            })
    }

    render() {
        return (
            <>
                <div id='login'>
                    <Form id='login-form' {...layout} ref={this.formRef} onFinish={this.login}>
                        <Form.Item label='用户名' name='name' rules={[
                            {
                                type: 'string',
                                required: true
                            }
                        ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label='密码' name='password' rules={[
                            {
                                type: 'string',
                                required: true
                            }
                        ]}>
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Space>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                                <Button type="primary" htmlType="reset">
                                    重置
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}

export default Login;