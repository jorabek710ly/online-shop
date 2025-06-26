import React from 'react';
import { useSelector } from 'react-redux';
import Product from '@/components/product/Product';
import NotFound from '../notFaund/NotFound';

const Wishlist = () => {
  // Redux'dan wishlistni xavfsiz tortib olish
  const wishlist = useSelector((state) => state.wishlist?.value ?? []);

  return (
    <div className="container mx-auto px-4 py-8">
      {wishlist.length > 0 ? (
        <Product data={wishlist} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Wishlist;
