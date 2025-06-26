import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '@/rudex/features/wishlistSlice';
import { addToCart } from '@/rudex/features/cart';

const Skeleton = ({ count = 4 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="min-w-[303px] animate-pulse bg-white max-[768px]:w-full mx-auto shadow rounded-xl overflow-hidden hover:shadow-md transition duration-300"
        >
          <div className="w-full h-72 bg-gray-200" />
          <div className="p-4 bg-[#F4F5F7] space-y-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-300 rounded" />
              <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Product = ({ data = [], loading = false, count = 4 }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist?.value ?? []);

  if (!Array.isArray(data)) {
    console.warn('Product component: data is not an array', data);
    return <p className="text-red-700 text-center">Invalid product data</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="font-Pb text-center text-[32px] mb-10 max-[768px]:text-[24px] max-[540px]:text-[20px]">
        Our Products
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-8 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1">
        {loading ? (
          <Skeleton count={count} />
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              <div className="relative w-full h-72 bg-white p-2 flex items-center justify-center">
                <img
                  onClick={() => navigate(`/productDetail/${item.id}`)}
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full object-contain cursor-pointer"
                />
                <span className="absolute top-2 left-2 bg-[#db0000] text-white text-[12px] font-Pm px-3 py-1 rounded-full shadow">
                  -{item.discountPercentage}%
                </span>
              </div>

              <button
                onClick={() => dispatch(toggleWishlist(item))}
                className="absolute top-2 right-2 bg-white w-[35px] h-[35px] shadow-sm rounded-full flex items-center justify-center hover:scale-105 transition"
              >
                {wishlist.some((el) => el.id === item.id) ? (
                  <HeartFilled style={{ color: 'red' }} />
                ) : (
                  <HeartOutlined style={{ color: 'gray' }} />
                )}
              </button>

              <div className="p-4 bg-[#F4F5F7] flex flex-col gap-2">
                <h3 className="font-Ps text-[#3A3A3A] text-[20px] max-[768px]:text-[18px] max-[540px]:text-[16px] line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[#898989] font-Pm text-sm max-[540px]:text-xs">
                  {item.shippingInformation}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-gray-800">
                    ${item.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    ${(item.price * 1.2).toFixed(0)}
                  </p>
                </div>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-[#c5a14e] hover:bg-[#cebb8f] text-white font-semibold text-sm py-2 px-4 mt-3 rounded-lg flex items-center justify-center gap-2 transition duration-200 shadow"
                >
                  <ShoppingCartOutlined />
                  Add to cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Product);
