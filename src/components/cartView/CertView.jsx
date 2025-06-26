import { decrementCart, incrementCart, removeCart } from '@/rudex/features/cart';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';

const CertView = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container mx-auto mt-[74px] p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Table */}
        <div className="lg:col-span-2">
          <div className="p-4 rounded-lg overflow-x-auto">
            <div className="bg-[#F9F1E7] py-4 px-6 md:px-10 mb-8 grid grid-cols-4 sm:grid-cols-5 font-semibold border-b border-gray-300 text-gray-600 text-sm">
              <span className="font-Pm text-[16px] sm:text-[18px] text-black">Product</span>
              <span className="font-Pm text-[16px] sm:text-[18px] text-black hidden sm:block">Price</span>
              <span className="font-Pm text-[16px] sm:text-[18px] text-black">Quantity</span>
              <span className="font-Pm text-[16px] sm:text-[18px] text-black">Subtotal</span>
              <span className="hidden sm:block"></span>
            </div>

            {data?.map((product) => (
              <div key={product.id} className="grid grid-cols-4 sm:grid-cols-5 items-center py-4 text-sm gap-2 border-b border-gray-200">
                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <img src={product.thumbnail} alt={product.title} className="w-14 h-14 object-cover rounded" />
                  <p className="text-gray-800 text-sm sm:text-base font-Pm">{product.title}</p>
                </div>

                <span className="text-gray-700 hidden sm:block font-Pm">
                  ${product.price.toLocaleString()}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => dispatch(decrementCart(product))}
                    className="border border-gray-400 text-[14px] font-semibold px-2 py-0.5 rounded hover:bg-gray-100 disabled:opacity-40 transition"
                  >−</button>
                  <span className="font-medium">{product.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementCart(product))}
                    className="border border-gray-400 text-[14px] font-semibold px-2 py-0.5 rounded hover:bg-gray-100 transition"
                  >+</button>
                </div>

                <span className="font-medium text-gray-900">
                  ${ (product.price * product.quantity).toLocaleString() }
                </span>

                <button
                  onClick={() => dispatch(removeCart(product))}
                  className="text-yellow-600 hover:text-yellow-800 text-lg hidden sm:block transition"
                  title="Remove"
                >
                  <DeleteOutlined />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="bg-[#F9F1E7] flex flex-col justify-center py-10 px-6 rounded-lg shadow-sm">
          <h2 className="text-[24px] sm:text-[30px] font-Pb text-center mb-8">Cart Totals</h2>

          <div className="flex justify-between items-center text-sm text-gray-700 font-Pm mb-4">
            <span>Subtotal</span>
            <span className="font-semibold text-black">
              ${ data.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString() }
            </span>
          </div>

          <div className="flex justify-between items-center text-[17px] sm:text-[18px] border-t pt-3 font-bold text-[#B88E2F] font-Pm">
            <span>Total</span>
            <span>
              ${ data.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString() }
            </span>
          </div>

          <button className="w-full mt-6 border border-black text-sm font-semibold py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-200">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertView;
