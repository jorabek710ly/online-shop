import React from 'react';
import furniture from '../../assets/img/furniture.svg';

const Furniture = () => {
  return (
    <div className="container mx-auto my-[68px] px-4">
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <p className="font-Ps text-[#7a7a7a] text-[20px] max-[768px]:text-[16px] max-[640px]:text-[14px]">
          Share your setup with
        </p>
        <p className="font-Pb text-[#2c2c2c] text-[41px] max-[768px]:text-[30px] max-[640px]:text-[22px] max-[400px]:text-[18px]">
          #FuniroFurniture
        </p>
        <span className="w-[60px] h-[4px] bg-[#b88e2f] rounded mt-2"></span>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={furniture}
          alt="Funiro Furniture"
          className="w-full object-cover hover:scale-[1.01] transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default React.memo(Furniture);
