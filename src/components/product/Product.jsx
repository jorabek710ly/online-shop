import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-semibold mb-10 text-gray-800 max-[768px]:text-2xl max-[540px]:text-xl">
        Our Products
      </h2>

     <div className="grid grid-cols-4  sm:grid-cols-3 md:grid-cols-4 gap-6 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-10 ">

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

            <div className="bg-[#F9FAFB] p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.shippingInformation}</p>

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

     <div className="text-center mt-12">
  <Link
    to="/shop"
    className="
      inline-block
      w-[280px] px-8 py-4
      text-base font-medium text-[#B88E2F] border border-[#B88E2F]
      rounded-md
      hover:bg-[#B88E2F] hover:text-white
      shadow-sm hover:shadow-md
      transition-all duration-300
      focus:outline-none
      max-[540px]:w-full max-[540px]:text-sm max-[540px]:py-3
    "
  >
    Show More
  </Link>
</div>

    </div>
  )
}

export default React.memo(Product)
