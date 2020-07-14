import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './component/home'
import Category from './component/category'
import Product from './component/product'
import SingleProduct from './component/singleProduct'
import Cart from './component/cart'
import Order from './component/order'
import NotFound from './component/notFound'


const RouterConfig = () => {
    return (
        <Routes>
            <Route strict path='/' element={<Home />}/>
            <Route strict path='/category' element={<Category />} />
            <Route path='/category/:type' element={<Product />} />
            <Route path='/category/:type/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    )
}

export default RouterConfig;
