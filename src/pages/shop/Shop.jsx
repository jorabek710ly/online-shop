import React, { useState } from 'react'
import { useProduct } from '@/api/hooks/useProduct'
import HeroShop from '@/components/heroShop/HeroShop'
import Support from '@/components/support/Support'
import { Pagination, Select } from 'antd'
import Product from '@/components/product/Product'
import { useSearchParams } from 'react-router-dom'
import kilen from "../../assets/img/kilen.svg"
import system from "../../assets/img/system.svg"
import vek from "../../assets/img/vek.svg"

const { Option } = Select

const Shop = () => {
  const { getProduct } = useProduct()
  const [params, setParams] = useSearchParams()
  const page = parseInt(params.get("page")) || 1
  const pageSize = parseInt(params.get("pageSize")) || 16

  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) })

  const handlChangePage = (page, pageSize) => {
    params.set("page", page)
    params.set("pageSize", pageSize)
    setParams(params)
  }

  return (
    <>
      <HeroShop title="Shop" />

      <section className="bg-[#F9F1E7] py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <img src={system} alt="filter" className="w-5 h-5" />
            <span className="text-sm text-gray-700 font-medium">Filter</span>
            <img src={vek} alt="sort" className="w-5 h-5" />
            <img src={kilen} alt="grid" className="w-5 h-5" />
            <div className="h-5 border-l border-gray-400 mx-2"></div>
            <span className="text-sm text-gray-600">Showing 1–{pageSize} of {data?.data?.total} results</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <Select
                defaultValue={pageSize}
                style={{ width: 80 }}
                onChange={(val) => handlChangePage(1, val)}
              >
                <Option value={8}>8</Option>
                <Option value={16}>16</Option>
                <Option value={24}>24</Option>
                <Option value={32}>32</Option>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <Select defaultValue="default" style={{ width: 160 }}>
                <Option value="default">Default</Option>
                <Option value="price-low-high">Price: Low to High</Option>
                <Option value="price-high-low">Price: High to Low</Option>
                <Option value="title-az">Title: A-Z</Option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <Product data={data?.data?.products} loading={isLoading} count={pageSize} />

          <div className="mt-10 flex justify-center">
            <Pagination
              current={page}
              pageSize={pageSize}
              total={data?.data?.total}
              onChange={handlChangePage}
              showSizeChanger={false}
            />
          </div>
        </div>
      </section>

      <Support />
    </>
  )
}

export default React.memo(Shop)
