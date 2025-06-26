import { Suspense } from '@/utils'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import NotFound from './notFaund/NotFound'
import Wishlist from './wishlist/wishlist'
import ProductDeatailPage from './ProductDetailPage/ProductDetailPage'
const Layout = lazy(() => import("./layout/Layout"))
const Home = lazy(() => import("./home/Home"))
const About = lazy(() => import("./about/About"))
const Shop = lazy(() => import("./shop/Shop"))
const Cart = lazy(() => import("./cart/Cart"))

const Root = () => {
    return (
        <>
            {
                useRoutes([
                    {
                        path: "/", element: <Suspense><Layout /></Suspense>, children: [
                            { path: "/", element: <Suspense><Home /></Suspense> },
                            { path: "/shop", element: <Suspense><Shop /></Suspense> },
                            { path: "/wishlist", element: <Suspense><Wishlist /></Suspense> },
                            { path: "/cart", element: <Suspense><Cart /></Suspense> },
                            { path: "*", element: <Suspense><NotFound /></Suspense> },
                            { path: "/ProductDetailPage/:id", element: <Suspense><ProductDeatailPage /></Suspense> }
                        ]
                    }
                ])
            }
        </>
    )
}

export default Root