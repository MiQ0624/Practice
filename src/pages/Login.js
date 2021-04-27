import React from 'react';

import { useState } from 'react';
import { Modal, Button,Tabs,Form, Input, Checkbox ,Row,Col,AutoComplete, Cascader, Select, Card, message,} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {setToken} from '../utils/auth'
import { loginApi } from '../services/auth';

const { TabPane } = Tabs;

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    showModle=(e)=>{

    }

    handleOk=()=>{
    }

    handleCancel=()=>{
    }

     callback=(key)=> {
        console.log(key);
      }
 
    onWebsiteChange = (value) => {
        }

    handleSubmit=(values)=>{
        console.log(values);

        setToken(values.username);

        this.props.history.push("/admin")


    }

    // handleSubmit=e=>{
    //     e.preventdefault();
    //     props.form.validateFields((err,values)=>{
    //         if(!err){
    //             console.log("数据",values);
    //             loginApi({username:values.username,Password:values.password})
    //             .then(res=>{if(res.code=='success'){
    //                 message.success('登录成功')
    //                 setToken(res.token)
    //                 this.props.history.push("/admin")
    //             }else{
    //                message.info(res.message) 
    //             }
    //             // console.log(res);
    //         })
    //         .catch(err=>{
    //             // console.log(err);
    //             message.error('用户不存在')
    //         })
    //         }
    //     })
    // }
      
    render(){
        
        return(
            <>
                <Card title="登陆注册页面"  onOk={this.handleOk} onCancel={this.handleCancel} style={{backgroundColor:'#ccc'}}>
                    <Tabs onChange={this.callback} type="card" style={{maxWidth:300,marginLeft:300}}>
                        {/* 用户登录 */}
                        <TabPane tab="登录" key="1">
                                {/* onFinish提交表单 */}
                                <Form layout="horizontal" onFinish={this.handleSubmit}>
                                    <Form.Item label="用户名" name="username" rules={[ {required: true, message: '用户名不能为空!', }, ]}>
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                    </Form.Item>

                                    <Form.Item  label="密__码"  name="password"  rules={[ {required: true, message: '密码不能为空!', }, ]}>
                                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
                                    </Form.Item>

                                    <Checkbox>Remember me</Checkbox>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button"  style={{width:' 100%'}}> Log in </Button><br/>
                                        <a className="login-form-forgot" href="#" style={{float:'right'}}> Or Forgot password </a>
                                        <a href="" style={{float:'right'}}>register now!</a>
                                    </Form.Item>

                                </Form>
                            </TabPane>
                        {/* 用户注册 */}
                        <TabPane tab="注册" key="2">
                                <Form name="register" initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86',}} scrollToFirstError >
                                    <Form.Item name="nickname" label="Nickname" tooltip="What do you want others to call you?" rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}>
                                        <Input />
                                    </Form.Item>

                                    <Form.Item name="email" label="E-mail" rules={[{type: 'email',message: 'The input is not valid E-mail!',},{required: true,message: 'Please input your E-mail!',},]}>
                                        <Input />
                                    </Form.Item>

                                    <Form.Item name="password" label="Password" rules={[{required: true, message: 'Please input your password!', }, ]} hasFeedback>
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback rules={[ {     required: true,     message: 'Please confirm your password!', }, ({ getFieldValue }) => ({     validator(_, value) {      if (!value || getFieldValue('password') === value) {         return Promise.resolve();     }     return Promise.reject(new Error('The two passwords that you entered do not match!'));    },}),]}>
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item   name="residence"   label="Habitual Residence"   rules={[   { type: 'array', required: true, message: 'Please select your habitual residence!' },   ]}  >
                                        <Cascader />
                                    </Form.Item>

                                    <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]} >
                                        <Input style={{ width: '100%' }} />
                                    </Form.Item>

                                    <Form.Item name="website" label="Website" rules={[{ required: true, message: 'Please input website!' }]} >
                                            <Input />
                                    </Form.Item>

                                    <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                                        <Row gutter={8}>
                                            <Col span={12}>
                                                <Form.Item name="captcha" noStyle rules={[{ required: true, message: 'Please input the captcha you got!' }]} >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                            <Button>Get captcha</Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>

                                    <Form.Item  name="agreement"  valuePropName="checked"  rules={[  {      validator: (_, value) =>      value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),  },  ]}  >
                                        <Checkbox>
                                            I have read the 
                                            <a href="">agreement</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Register
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>
                    </Tabs>
                    </Card>
            </>
        )
    }

}

export default Login;