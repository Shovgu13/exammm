import Admin from "../admin/Adminpanel/Admin";
import About from "../layout/About";
import Layout from "../layout/Layout";
import Basket from "../layout/basket/Basket";
import Detail from "../layout/detail/Detail";
import Home from "../layout/home/Home";
import Wishlist from "../layout/wishlist/Wishlist";



export const router = [
    {
        path:"/",
        elemnt: <Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"/detail",
                element: <Detail/>,
            },
            {
                path:"/about",
                element: <About/>

            }
            

        ]

    },
    {
        path:"/basket",
        element: <Basket/>

    },
    {
        path:"/wishlist",
        element: <Wishlist/>

    },{
        path:"/admin",
        element: <Admin/>

    }

]