import React from 'react'
import high from '../../assets/img/high.svg'
import warranty from '../../assets/img/warranty.svg'
import free from '../../assets/img/free.svg'
import support from '../../assets/img/support.svg'

const supportItems = [
  {
    icon: high,
    title: 'High Quality',
    description: 'Crafted from top materials'
  },
  {
    icon: warranty,
    title: 'Warranty Protection',
    description: 'Over 2 years'
  },
  {
    icon: free,
    title: 'Free Shipping',
    description: 'Order over $150'
  },
  {
    icon: support,
    title: '24 / 7 Support',
    description: 'Dedicated support'
  }
]

const Support = () => {
  return (
    <div className="bg-[#FAF3EA] py-20 mt-[85px]">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {supportItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 bg-white px-5 py-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
          >
            <div className="flex-shrink-0 transform transition-transform duration-300 group-hover:scale-110">
              <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#242424] font-Ps">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 font-Pm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Support)
