const publicRoutes = {
    home: '',
    profile: 'profile',
    contact: 'contact',
    about: 'about',
    login: 'login',
    register: 'register',
    productDetails: 'product/:id',

}

const privateRoutes = {
    product: {
        list: 'product',
        add: 'product/add',
        edit: 'product/edit/:id',
    },
    customer: {
        list: 'customer',
        add: 'customer/add',
        edit: 'customer/edit',
    },
    category: {
        list: 'category',
        add: 'category/add',
        edit: 'category/edit',
    },


}


export {publicRoutes, privateRoutes};