import React from 'react';
import heroShop from '../../assets/img/shop_img.svg';
import vektor from '../../assets/img/Vector.svg';
import { Link } from 'react-router-dom';

const HeroShop = ({ title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${heroShop})` }}
      className="h-[320px] bg-cover bg-center flex items-center justify-center px-4"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-Pb text-[#2c2c2c] text-[42px] max-[768px]:text-[32px] max-[480px]:text-[24px] mb-4">
          {title}
        </p>

        <div className="flex items-center gap-3 text-[16px] max-[480px]:text-[14px] text-gray-700 font-Pm">
          <Link to="/" className="hover:underline hover:text-[#b88e2f] transition-all duration-200">
            Home
          </Link>
          <img src={vektor} alt=">" className="w-3 h-3" />
          <span className="text-[#999999]">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroShop);
