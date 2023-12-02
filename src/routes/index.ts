import HomePage from "../pages/client/Home";
import Route from "../types/Route";
import ProductDetails from "../pages/client/Details";
import AboutPage from "../pages/client/About";
import ContactPage from "../pages/client/Contact";
import RegisterPage from "../pages/client/Register";
import LoginPage from "../pages/client/Login";
import Profile from "../pages/client/Profile";
import ListProducts from "../pages/admin/Product";
import AddProduct from "../pages/admin/Product/add";
import EditProduct from "../pages/admin/Product/edit";

import config from "../config";



const routesClient: Route[] = [
    {
        path: config.publicRoutes.home,
        component: HomePage,
    },
    {
        path: config.publicRoutes.about,
        component: AboutPage,
    },
    {
        path: config.publicRoutes.contact,
        component: ContactPage,
    },
    {
        path: config.publicRoutes.profile,
        component: Profile,
    },
    {
        path: config.publicRoutes.login,
        component: LoginPage,
    },
    {
        path: config.publicRoutes.register,
        component: RegisterPage,
    },
    {
        path: config.publicRoutes.productDetails,
        component: ProductDetails,
    }
]

const routesAdmin: Route[] = [
    {
        path: config.privateRoutes.product.list,
        component: ListProducts,
    },
    {
        path: config.privateRoutes.product.add,
        component: AddProduct,
    },
    {
        path: config.privateRoutes.product.edit,
        component: EditProduct,
    },
    
]


export {routesClient, routesAdmin}