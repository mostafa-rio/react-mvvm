import React, { ChangeEvent, useEffect, useState } from 'react';
import useProductViewModel from '../../viewModels/useProductViewModel';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../types';
const useProductListViewController = () => {
  const navigation = useNavigate();
  const { getProducts } = useProductViewModel();
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [query, setQuery] = useState('');
  const handleOrder = (id: number) => {
    navigation(`/details/${id}`);
  };

  const handleInputChange: React.ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    (async () => {
      setProductList(await getProducts(query));
    })();
  }, [query]);

  return { handleOrder, handleInputChange, productList, query };
};

export default useProductListViewController;
