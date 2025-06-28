import { decrementCart, incrementCart, removeCart } from '@/rudex/features/cart';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CertView = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mx-auto mt-[60px] p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        {/* Left: Cart items */}
        <div className="lg:col-span-2">
          <div className="p-4 rounded-md overflow-x-auto bg-[#f4f4f4] shadow-sm">
            {/* Header row */}
            <div className="bg-[#eaeaea] py-4 px-4 md:px-6 mb-6 grid grid-cols-4 sm:grid-cols-5 font-medium text-[#444] text-[14px] rounded-md border-b border-[#ccc]">
              <span className="font-Pm text-[15px] sm:text-[17px]">Product</span>
              <span className="font-Pm text-[15px] sm:text-[17px] hidden sm:block">Price</span>
              <span className="font-Pm text-[15px] sm:text-[17px]">Qty</span>
              <span className="font-Pm text-[15px] sm:text-[17px]">Subtotal</span>
              <span className="hidden sm:block"></span>
            </div>

            {/* Product rows */}
            {data?.map((product) => (
              <div key={product.id} className="grid grid-cols-4 sm:grid-cols-5 items-center py-4 border-b text-sm gap-2">
                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-[56px] h-[56px] object-cover rounded-md"
                  />
                  <p className="text-gray-800 text-sm sm:text-[15px]">{product.title}</p>
                </div>

                <span className="text-gray-600 hidden sm:block text-[14px]">Rs. {product.price.toLocaleString()}</span>

                <div className="flex items-center gap-2">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => dispatch(decrementCart(product))}
                    className="border border-gray-400 rounded px-2 py-0.5 text-[16px] disabled:opacity-40"
                  >
                    −
                  </button>
                  <span className="text-[15px]">{product.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementCart(product))}
                    className="border border-gray-400 rounded px-2 py-0.5 text-[16px]"
                  >
                    +
                  </button>
                </div>

                <span className="font-medium text-[#333] text-[15px]">
                  Rs. {(product.price * product.quantity).toLocaleString()}
                </span>

                <button
                  onClick={() => dispatch(removeCart(product))}
                  className="text-red-500 hover:text-red-700 text-[17px] hidden sm:block"
                  title="Remove"
                >
                  <DeleteOutlined />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cart Totals */}
        <div className="bg-[#f4f4f4] flex flex-col items-center justify-center py-[50px] px-6 rounded-md shadow-sm">
          <h2 className="text-[26px] sm:text-[30px] font-semibold mb-8 text-center font-Pb text-[#2d2d2d]">
            Cart Totals
          </h2>

          <div className="flex justify-between w-full mb-3 text-[14px] text-[#555] font-Pm">
            <span>Subtotal</span>
            <span>
              Rs. {data.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between w-full text-[16px] sm:text-[18px] border-t pt-4 font-bold text-[#4a3d1f] font-Pm">
            <span>Total</span>
            <span>
              Rs. {data.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-6 border border-black py-2 rounded-md hover:bg-black hover:text-white transition-all"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertView;
