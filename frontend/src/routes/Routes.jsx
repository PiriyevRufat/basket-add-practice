import AddPage from "../pages/admin/AddPage/AddPage.jsx";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import AdminRoot from "../pages/admin/AdminRoot";

const ROUTES = [
    {path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>}
    ]},{
        path:"/admin",
        element:<AdminRoot/>,
        children:[{
            path:"",
            element:<AddPage/>
        },
    ]}]

export  default ROUTES;