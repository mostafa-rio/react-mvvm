import React from 'react';
import useProductViewController from './useProductViewController';

type Props = {};

function Product({}: Props) {
  const { product } = useProductViewController();
  if (!product)
    return <div className="container text-white text-center">loading...</div>;
  return (
    <div className="container py-3">
      <img
        alt={product.name}
        src={product.image}
        className="card-img-top rounded"
      />
      <div>
        <h3 className="text-white mt-2">{product.name}</h3>
        <p className="text-white">{product.description}</p>
        <button className="w-100 btn btn-primary">Submit Order</button>
      </div>
    </div>
  );
}

export default Product;
