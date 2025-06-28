import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '@/rudex/features/wishlistSlice'
import { addToCart } from '@/rudex/features/cart'

const Skeleton = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill()
        .map((_, inx) => (
          <div
            key={inx}
            className="min-w-[303px] animate-pulse bg-white shadow-md rounded-xl overflow-hidden"
          >
            <div className="relative w-full h-72 bg-gray-200" />
            <div className="p-4 space-y-3 bg-[#F4F5F7] py-6">
              <div className="h-5 bg-gray-300 rounded w-2/3" />
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        ))}
    </>
  )
}

const Product = ({ data, loading, count }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.wishlist.value)

  return (
    <div className="container mx-auto px-4 py-12 mt-[60px]">
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-8 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1">
        {loading ? (
          <Skeleton count={count} />
        ) : (
          data?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden relative shadow-sm hover:shadow-xl transition duration-300 group"
            >
              {/* IMAGE */}
              <div className="relative w-full h-72 overflow-hidden bg-[#F9F9F9]">
                <img
                  onClick={() => navigate(`/productDetail/${item.id}`)}
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                />

                {/* DISCOUNT LABEL */}
                <span className="absolute top-2 left-2 text-white text-xs bg-[#E97171] px-3 py-1 rounded-full font-semibold shadow-sm">
                  -{item.discountPercentage}%
                </span>

                {/* WISHLIST BUTTON */}
                <button
                  onClick={() => dispatch(toggleWishlist(item))}
                  className="absolute top-2 right-2 bg-white shadow w-[36px] h-[36px] rounded-full flex items-center justify-center hover:scale-110 transition"
                >
                  {wishlist.some((el) => el.id === item.id) ? (
                    <HeartFilled style={{ color: 'red' }} />
                  ) : (
                    <HeartOutlined style={{ color: 'gray' }} />
                  )}
                </button>
              </div>

              {/* INFO */}
              <div className="p-4 bg-[#F4F5F7] flex flex-col gap-3">
                <h3 className="text-[#3A3A3A] font-Ps font-semibold text-[22px] leading-tight line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-Pr text-sm leading-snug">
                  {item.shippingInformation}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-[18px] font-bold text-[#2c2c2c]">
                    ${item.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    ${(item.price * 1.2).toFixed(0)}
                  </p>
                </div>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="mt-2 bg-[#B88E2F] hover:bg-[#a47d22] text-white py-2 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow hover:scale-[1.03] transition-all"
                >
                  <ShoppingCartOutlined />
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default React.memo(Product)
