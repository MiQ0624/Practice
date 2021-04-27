// import React, { Component } from 'react';
// import {BrowserRouter as Router,Route, Link } from 'react-router-dom';
// import Edit from '../pages/Edit';
// import Index from '../pages/Index';
// import List from '../pages/List';
// import Login from '../pages/Login';
// import PageNotFound from '../pages/PageNotFound'

// class Routes extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         let routes=[
//             {path:"/",component:Index,exact:true},
//             {path:"/edit",component:Edit,},
//             {path:"/list",component:List},
//             {path:"/login",component:Login}
//         ]
//         return (
//             <Router>
//                 <header>
//                     <Link to="/">首页</Link>
//                     <Link to="/login">登录</Link>
//                     <Link to="/edit">编辑</Link>
//                     <Link to="/list">商品</Link>
//                 </header>
//                 {
//                     routes.map((route,key)=>{
//                         return <Route key={key} exact path={route.path} component={route.component} />
//                     })
//                 }

//             </Router>
//         );
//     }
// }

// export default Routes;