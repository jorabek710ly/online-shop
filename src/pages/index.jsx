import { Suspense } from '@/utils'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
const Layout = lazy(() => import("./layout/Layout"))
const  Home = lazy(() => import("./home/Home"))
const About = lazy(() => import("./about/About"))
const Shop = lazy(() => import("./shop/Shop"))
const NotFound = lazy(() => import("./notFound/NotFound"))
// const NotFound = lazy(() => import("./notFound/NotFound"))
const ProductDeatail = lazy(() => import("./ProductDetailPage/ProductDetailPage"))

const Root = () => {
  return (
    <>
     {
      useRoutes([
        {
          path:"/" , element: <Suspense><Layout/></Suspense> , children:[
            {path:"/" , element:<Suspense><Home/></Suspense>},
            {path:"/shop" , element:<Suspense><Shop/></Suspense>},
            {path:"*" , element:<Suspense><NotFound/></Suspense>},
            {path:"/productDetail/:id" , element:<Suspense><ProductDeatail/></Suspense>},
          ]
        }
      ])
     }
    </>
  )
}

export default Root