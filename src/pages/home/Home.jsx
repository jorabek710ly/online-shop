import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProduct } from '@/api/hooks/useProduct'
import Hero from '@/components/hero/Hero'
import Browce from '@/components/browce/Browce'
import Product from '@/components/product/Product'
import Furniture from '@/components/furniture/Furniture'

const Home = () => {
  const { getProduct } = useProduct()
  const { data, isLoading } = getProduct({ limit: 8 })
  const navigate = useNavigate()

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <Hero />

      {/* Browse Collection */}
      <section className="py-20 bg-[#FAF3EA]">
        <Browce />
      </section>

      {/* Product Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-Pb text-[40px] max-[990px]:text-[30px] max-[768px]:text-[25px] max-[540px]:text-[20px] leading-[120%] mb-12">
            Our Products
          </h2>
          <Product data={data?.data?.products} loading={isLoading} count={8} />

          <div className="text-center mt-[40px]">
            <button
              onClick={() => navigate("/shop")}
              className="py-3 px-20 text-[#B88E2F] border border-[#B88E2F] font-Pm rounded-full transition-all duration-300 hover:bg-[#B88E2F] hover:text-white hover:shadow-md max-[540px]:px-10 max-[540px]:text-sm"
            >
              Show More
            </button>
          </div>
        </div>
      </section>

      {/* Furniture Showcase */}
      <section className="py-20 bg-[#F4F4F4]">
        <Furniture />
      </section>
    </div>
  )
}

export default React.memo(Home)
