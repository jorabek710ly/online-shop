import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import { useProduct } from "@/api/hooks/useProduct";

const Shop = () => {
  const navigate = useNavigate();
  const { getProduct } = useProduct();
  const [params, setParams] = useSearchParams();

  const page = parseInt(params.get("page") || "1", 10);
  const pageSize = parseInt(params.get("pageSize") || "16", 10);

  const { data } = getProduct({
    limit: pageSize,
    skip: (page - 1) * pageSize,
  });

  const handleChangePage = (page, size) => {
    const newParams = new URLSearchParams(params);
    newParams.set("page", page.toString());
    newParams.set("pageSize", size.toString());
    setParams(newParams);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12 max-[768px]:text-2xl">
        Our Products
      </h2>

      <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-10">

        {data?.data?.products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <div
              className="relative w-full aspect-[4/3] bg-white cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-[#E97171] text-white text-xs px-2 py-1 rounded-full font-medium">
                -{product.discountPercentage}%
              </span>
            </div>

            <div className="bg-[#F9FAFB] p-5 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#3A3A3A] truncate max-[768px]:text-[18px] max-[540px]:text-[16px]">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium max-[540px]:text-xs">
                {product.shippingInformation}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-gray-800">
                  {product.price.toLocaleString()}$
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {(product.price * 1.2).toFixed(0)}$
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

<div className="mt-12 flex justify-center">
  <Pagination
    current={page}
    onChange={handleChangePage}
    total={data?.data?.total || 0}
    pageSize={pageSize}
    showSizeChanger={false}
    className="[&_.ant-pagination-item]:border [&_.ant-pagination-item]:border-[#b88e2f] 
               [&_.ant-pagination-item]:text-[#b88e2f] [&_.ant-pagination-item]:rounded 
               [&_.ant-pagination-item]:w-10 [&_.ant-pagination-item]:h-10 
               [&_.ant-pagination-item-active]:bg-[#b88e2f] 
               [&_.ant-pagination-item-active]:text-white"
  />
</div>

    </div>
  );
};

export default Shop;

