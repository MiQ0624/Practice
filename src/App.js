import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import Frame from './component/Frame/index'
import {isLogined} from './utils/auth'

import {BrowserRouter as Router,Redirect,Route, Switch } from 'react-router-dom';

import { adminRoutes } from './routes';




function App() {

  return (
    isLogined()?
    <Frame>
      <h1>admin路由都走APP组件</h1>
      <Switch>
        {adminRoutes.map(route=>{
          return <Route key={route.path} path={Route.path} exact ={route.exact} render={routeProps=>{
            return <route.component {...routeProps} />
          }}  />
        })}
        
        {/* 利用重定向redire，使页面地址错误时显示404页面 */}
        <Redirect to='/index' from="/admin" />
        <Redirect to='/404'/>
      </Switch>
      
    </Frame>
    :<Redirect to='/login' />
    
  );
}

export default App;
