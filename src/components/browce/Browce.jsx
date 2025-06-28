import React from 'react';
import dining from "../../assets/img/fring.svg";
import living from "../../assets/img/living.svg";
import bedroom from "../../assets/img/bedroom.svg";

const Browce = () => {
  return (
    <div className="mt-[60px] mb-[60px] container mx-auto px-4">
      {/* Title section */}
      <div className="text-center mb-[50px]">
        <p className="text-[#2f2f2f] font-Pb text-[30px] leading-[100%] mb-[10px] max-[768px]:text-[26px] max-[480px]:text-[22px]">
          Browse The Range
        </p>
        <p className="text-[#888888] font-Pr text-[18px] max-[768px]:text-[16px] max-[480px]:text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-[24px] max-[990px]:grid-cols-2 max-[640px]:grid-cols-1 max-[540px]:gap-[32px]">
        {/* Dining */}
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <img
            src={dining}
            alt="Dining"
            className="w-full max-w-[300px] h-[180px] object-contain"
          />
          <p className="font-Ps text-[22px] text-[#444] max-[480px]:text-[18px]">
            Dining
          </p>
        </div>

        {/* Living */}
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <img
            src={living}
            alt="Living"
            className="w-full max-w-[300px] h-[180px] object-contain"
          />
          <p className="font-Ps text-[22px] text-[#444] max-[480px]:text-[18px]">
            Living
          </p>
        </div>

        {/* Bedroom */}
        <div className="flex flex-col items-center justify-center gap-[24px]">
          <img
            src={bedroom}
            alt="Bedroom"
            className="w-full max-w-[300px] h-[180px] object-contain"
          />
          <p className="font-Ps text-[22px] text-[#444] max-[480px]:text-[18px]">
            Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};


export default React.memo(Browce)