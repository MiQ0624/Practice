import logo from '../../images/logo.png'
import '../../App.css';
import 'antd/dist/antd.css';

import PageNotFound from "../../pages/PageNotFound";
import Index from "../../pages/admin/products/dashboard/Index"
import List from "../../pages/admin/products/List"
import Edit from '../../pages/admin/products/Edit'
import Login from "../../pages/Login";


import { Row, Col,Button,Dropdown,Avatar, Menu,Layout,Breadcrumb, message} from 'antd';
import {BrowserRouter as Router,Route, Link, Redirect } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined ,DownOutlined} from '@ant-design/icons';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Frame(props) {
  let routes=[
    {path:"/edit",component:Edit,},
    {path:"/list",component:List},
    {path:"/login",component:Login},
    {path:"/",component:Index}
]

const handleLogout=(p)=>{
  message.info(p.key)
  if(p.key=='logout'){
    localStorage.removeItem('token');
    props.history.push('/login')

  }

}

  const popMenu = (
    <Menu onClick={handleLogout}>
        <Menu.Item key="msg">通知中心</Menu.Item>
        <Menu.Item key="setting">设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" >退出</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Router>
        <Layout>
        <Header className="header">
          <Row>
            <Col span={3}><img src={logo} /></Col>
            <Col span={18}><h2>商城系统的管理后台</h2></Col>
            <Col span={3}>
              <Dropdown overlay={popMenu} >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {/* 头像 */}
                  <Avatar>U</Avatar>
                  <span style={{margin:10}}>User</span> 
                  <DownOutlined />
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" defaultSelectedKeys={['0']} defaultOpenKeys={['sub0']} style={{ height: '100%', borderRight: 0 }} >
              <SubMenu key="sub0" icon={<LaptopOutlined />} title="首页">
              <Menu.Item key="0"><Link to="/index">首页</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub1" icon={<UserOutlined />} title="用户信息">
                <Menu.Item key="1">个人信息</Menu.Item>
                <Menu.Item key="2">资产信息</Menu.Item>
                <Menu.Item key="3">其他信息</Menu.Item>
                <Menu.Item key="4"><Link to="/login">登录</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="店铺信息">
                <Menu.Item key="5"><Link to="/index">店铺首页</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/list">商品列表</Link></Menu.Item>
                <Menu.Item key="7">库存管理</Menu.Item>
                <Menu.Item key="8">收入与支出</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="商品信息">
                <Menu.Item key="9">商品一</Menu.Item>
                <Menu.Item key="10">商品二</Menu.Item>
                <Menu.Item key="11">商品三</Menu.Item>
                <Menu.Item key="12"><Link to="/edit">编辑</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<NotificationOutlined />} title="会员管理">
                <Menu.Item key="9">高级会员</Menu.Item>
                <Menu.Item key="10">普通会员</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* 面包屑 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="site-layout-background" style={{padding: 24,margin: 0,minHeight: 700,}}>
              {/* 路由 */}
              {routes.map((route,key)=>{return <Route key={key} exact path={route.path} component={route.component} /> }) }
            </Content>
          </Layout>
        </Layout>
      </Layout>,

      </Router>

      
    </div>
    
  );
}

export default Frame;
