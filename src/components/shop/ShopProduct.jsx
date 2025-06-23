import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ShopProduct = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-semibold mb-10 text-gray-800 max-[990px]:text-2xl max-[768px]:text-xl max-[540px]:text-lg">
        Our Products
      </h2>

      <div className="grid grid-cols-4 gap-6 sm:grid-cols-3 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <div
              className="relative w-full aspect-[4/3] bg-white cursor-pointer"
              onClick={() => navigate(`/productDetail/${item.id}`)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                -{item.discountPercentage}%
              </span>
            </div>

            <div className="bg-[#F9FAFB] p-5 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#3A3A3A] truncate max-[768px]:text-[18px] max-[540px]:text-[16px]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium max-[540px]:text-xs">
                {item.shippingInformation}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-gray-800">
                  {item.price.toLocaleString()}$
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {(item.price * 1.2).toFixed(0)}$
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopProduct
