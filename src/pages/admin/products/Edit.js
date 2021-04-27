import React, { Component, useState ,useEffect} from 'react';
import {Card, Form ,Button,Input,message} from 'antd'
import { createApi, getOneById } from '../../../services/products';

function Edit(){

    const [form] = Form.useForm();
    //props.match.params.id 存在的话表示修改，否则为新增
    const {getFieldDecoraator} =props.form;
    const [currentData,setCurrentData]=useState({})

    //初始化时执行，取一次数据
    useEffect(()=>{
        if(props.match.params.id){
            getOneById(props.match.params.id)
            .then(res=>{
                console.log(res);
                setCurrentData(res)
            })
        }
    })
    

    const onFinish = (values) => {

      console.log('表单数据: ', values);

    //   props.form.validateFieldsAndScroll((err,values)=>{
    //       if(!err){
    //           console.log(values);

    //           createApi(values)
    //           .then(res=>{
    //               console.log(res);
    //               props.history.push('/admin/products')
    //           })
    //           .catch(err=>{
    //               console.log(err);
    //           })
    //       }else{
    //           message.error('错误')
    //       }
    //   })
    };

    //使用自定义的输入规则
    const priceValidate=(rule,value,callback)=>{
        if (value*1>999){
            callback('价格不能超过999')
        }else{
            callback();
        }

    }

    return (
        <Card title="编辑页面" extra={<Button >刷新</Button>}>
            <Form    form={form}    name="register"    onFinish={onFinish} style={{maxWidth:300,marginLeft:300}} >
                <Form.Item name="id" label="序号" 
                            rules={[ {  required: true, message: '不能为空!', whitespace: true }, ]} >
                    <Input />
                </Form.Item>

                <Form.Item name="pname" label="商品名称" 
                            rules={[ {  required: true, message: '不能为空!', whitespace: true }, ]} >
                    <Input />
                </Form.Item>

                <Form.Item name="kind" label="分类" tooltip="商品所属分类"
                            rules={[ {  required: true, message: '不能为空!', whitespace: true }, ]} >
                    <Input />
                </Form.Item>

                <Form.Item name="price" label="商品价格" 
                            rules={[ {  required: true, message: '不能为空!', whitespace: true },{ validator:priceValidate} ]} >
                    <Input />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">注册</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}


export default Edit;