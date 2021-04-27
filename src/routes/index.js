
import PageNotFound from "../pages/PageNotFound";
import Index from "../pages/admin/products/dashboard/Index"
import List from "../pages/admin/products/List"
import Edit from '../pages/admin/products/Edit'
import Login from "../pages/Login";
import Frame from "../component/Frame";



export const mainRoutes=[
    {path:"/login",
    component:Login},
    {path:"/404",
    component:PageNotFound}
];

export const adminRoutes=[
    {path:"/index",
    component:Index},
    {path:"/admin/products",
    component:List,
    exact:true },
    {path:"/edit/:id",
    component:Edit,}, 
]