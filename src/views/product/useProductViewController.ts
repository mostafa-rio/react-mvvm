import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductViewModel from '../../viewModels/useProductViewModel';
import { ProductType } from '../../types';
function useProductViewController() {
  const [product, setProduct] = useState<ProductType>();
  const { id } = useParams();
  const { getProduct } = useProductViewModel();

  useEffect(() => {
    (async () => {
      if (Number(id)) {
        const result = await getProduct(Number(id));
        setProduct(result);
      }
    })();
  }, [id]);

  return {
    product,
  };
}

export default useProductViewController;
