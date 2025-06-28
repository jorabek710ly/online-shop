import React, { useState } from 'react';
import vektor from '../../assets/img/Vector.svg';
import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart, decrementCart, incrementCart } from '@/rudex/features/cart';

const ProDetailItem = (product) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const { title, thumbnail, price, images, rating, description, tags, category, sku } = product;

  return (
    <div className="mb-16">
      {/* BREADCRUMB */}
      <div className="bg-[#F3F3F3] py-6 text-sm text-gray-600 font-Pr">
        <div className="container mx-auto flex items-center gap-4 px-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <span className="hover:underline">Home</span>
            <img src={vektor} alt=">" className="w-3 h-3" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/shop')}>
            <span className="hover:underline">Shop</span>
            <img src={vektor} alt=">" className="w-3 h-3" />
          </div>
          <span className="text-black font-semibold">{title}</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: IMAGES */}
          <div className="flex gap-5 max-[768px]:flex-col">
            <div className="flex flex-col gap-4 max-h-[400px] overflow-auto">
              {images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setIndex(i)}
                  className={`w-[80px] h-[80px] object-cover rounded-lg border cursor-pointer ${
                    i === index ? 'border-black' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
            <img
              src={images?.[index] || thumbnail}
              alt={title}
              className="w-full h-[400px] object-contain rounded-lg bg-white p-2"
            />
          </div>

          {/* RIGHT: DETAILS */}
          <div>
            <h2 className="text-3xl font-Pb text-[#2c2c2c] mb-3">{title}</h2>
            <p className="text-[22px] text-[#B88E2F] font-Pm mb-4">Rs. {price}</p>

            <div className="flex items-center gap-2 mb-4">
              <Rate allowHalf defaultValue={rating || 4} disabled />
              <span className="text-sm text-gray-500">{rating} Customer Reviews</span>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

            <div className="mb-4">
              <p className="font-semibold mb-2">Size</p>
              <div className="flex gap-3">
                {['L', 'XL', 'XS'].map((size) => (
                  <button key={size} className="border px-4 py-1 text-sm rounded hover:bg-[#f1f1f1]">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="font-semibold mb-2">Color</p>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: '#5D5FEF' }} />
                <div className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: '#000000' }} />
                <div className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: '#D5A249' }} />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center mb-8">
              <div className="flex items-center border rounded overflow-hidden">
                <button onClick={() => dispatch(decrementCart(product))} className="px-3 py-1">-</button>
                <span className="px-4">1</span>
                <button onClick={() => dispatch(incrementCart(product))} className="px-3 py-1">+</button>
              </div>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-black text-white px-6 py-2 rounded hover:bg-[#1b1b1b] transition"
              >
                Add To Cart
              </button>
              <button className="border px-6 py-2 rounded hover:bg-gray-100 transition">+ Compare</button>
            </div>

            {/* PRODUCT META INFO */}
            <div className="text-sm text-gray-500 space-y-1 font-Pr">
              <p><strong>SKU:</strong> {sku}</p>
              <p><strong>Category:</strong> {category}</p>
              <p><strong>Tags:</strong> {tags?.[0]}, {tags?.[1]}</p>
              <p className="flex items-center gap-2">
                <strong>Share:</strong>
                <span className="inline-flex gap-2 text-gray-800">
                  <Facebook className="w-5" />
                  <Instagram className="w-5" />
                  <Twitter className="w-5" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProDetailItem);
