import React, { useEffect,useState } from 'react';
import { Card,Table, Tag, Space, Popconfirm ,Button,Pagination} from 'antd';
import { listApi } from '../../../services/products';


    function  List (props){
       
    //定义局部状态
    const[dataSource,setDataSource]=useState([])
    //服务器请求数据
    useEffect(()=>{
        listApi()
        .then(res=>{
            console.log(res);
            // setDataSource(ref.products)
        })
    },[])
  

 
        // 定义表格列
          const columns = [
            { title:"序号", key:"id" , render:(txt,record,index)=>index+1 },  //render方法自动返回序号，或者使用dataIndex:'id',
            { title: '商品名称',  dataIndex: 'pname',  key: 'pname',  render: text => <a>{text}</a>,},
            { title: '价格',  dataIndex: 'price',  key: 'price',},
            { title: '类别',  dataIndex: 'kind',  key: 'kind',},
            { title: '标签',  key: 'tags',  dataIndex: 'tags',  render: tags => (    
                    <>{tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                        color = 'volcano'; }
                        return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag> )   })}
                    </>   ),  },
                    
            {  title: '操作',  key: 'action',  render: (text, record,index) => (
                    <Space size="middle">
                        <a onClick={()=>{props.history.push('/admin/products/edit/${record._id}')}}>修改{record.name}</a>
                        {/* 删除确认 */}
                        <Popconfirm title="确认删除？" onConfirm={()=>console.log('删除')} onCancel={()=>{console.log('取消删除');}}>
                        <a>删除</a>
                        </Popconfirm>
                    </Space>
                ) }
          ];

        // 表格数据
          const data = [
            { id:1 , key: '1',  pname: '米',  price: 32,  kind: '食品',  tags: ['nice', 'developer'],},
            { id:2 , key: '2',  pname: '面',  price: 42,  kind: '食品',  tags: ['loser'],},
            { id:3 , key: '3',  pname: '油',  price: 32,  kind: '食品',  tags: ['cool', 'teacher'],},
            { id:4 , key: '4',  pname: '米',  price: 32,  kind: '食品',  tags: ['nice', 'developer'],},
            { id:5 , key: '5',  pname: '面',  price: 42,  kind: '零食',  tags: ['loser'],},
            { id:6 , key: '6',  pname: '油',  price: 32,  kind: '零食',  tags: ['cool', 'teacher'],},
            { id:7 , key: '7',  pname: '米',  price: 32,  kind: '食品',  tags: ['nice', 'developer'],},
            { id:8 , key: '8',  pname: '面',  price: 42,  kind: '玩具',  tags: ['loser'],},
            { id:9 , key: '9',  pname: '油',  price: 32,  kind: '玩具',  tags: ['cool', 'teacher'],},
            { id:10, key: '10',  pname: '米',  price: 32,  kind: '玩具',  tags: ['nice', 'developer'],},
            { id:11, key: '11',  pname: '面',  price: 42,  kind: '食品',  tags: ['loser'],},
            { id:12, key: '12',  pname: '油',  price: 32,  kind: '食品',  tags: ['cool', 'teacher'],},
          ];

        return (
            <>
                <Card title="商品列表" extra={<Button onClick={()=>{this.props.history.push("/edit")}}>新增+</Button>} style={{}}>
                    <Table columns={columns} dataSource={data} pagination={{defaultPageSize:8}} bordered/>
                    {/* 页码显示设置 */}
                    {/* <Pagination size="small" total={50} showSizeChanger showQuickJumper /> */}
                </Card>
            </>
         
            
        )
    
}

export default List;