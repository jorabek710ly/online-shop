import React from 'react';
import heroBg from '../../assets/img/hero_img.svg';
import { Button } from 'antd';

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center text-white p-6 flex flex-col justify-center items-end max-[1024px]:items-center max-[1024px]:text-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div
        className="bg-white/85 backdrop-blur-sm py-14 px-10 max-w-[640px] rounded-xl shadow-xl
        max-[1024px]:max-w-[500px]
        max-[768px]:max-w-[400px]
        max-[480px]:max-w-[90%] max-[480px]:px-5 max-[480px]:py-8"
      >
        <p className="text-[#4a4a4a] font-Ps mb-2 text-[15px] max-[768px]:text-[13px]">
          New Arrival
        </p>

        <p
          className="text-[#b88e2f] mb-[16px] font-Pb leading-[60px] text-[48px]
          max-[1024px]:text-[40px]
          max-[768px]:text-[30px]
          max-[480px]:text-[22px] max-[480px]:leading-[34px]"
        >
          Discover Our New Collection
        </p>

        <p
          className="text-[17px] font-Pm text-[#444444] mb-[40px]
          max-[1024px]:text-[15px]
          max-[768px]:text-[14px]
          max-[480px]:text-[13px] max-[480px]:mb-6"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <Button
          type="primary"
          className="transition-all duration-300
            hover:!bg-[#a1792c] hover:!border-[#a1792c]
            text-[15px] font-semibold tracking-wide
            w-[280px]
            max-[1024px]:w-[240px]
            max-[768px]:w-[200px]
            max-[480px]:w-full"
          style={{
            backgroundColor: '#b88e2f',
            borderColor: '#b88e2f',
            color: 'white',
            paddingTop: '14px',
            paddingBottom: '14px',
          }}
        >
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Hero);
