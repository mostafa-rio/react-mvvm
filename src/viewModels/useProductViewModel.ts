import React from 'react'
import useProductModel from '../models/useProductModel'

function useProductViewModel() {
  const { getProduct, getProducts } = useProductModel() // this can be replaced by redux or maybe context
  return {
    getProducts,
    getProduct,
  }
}

export default useProductViewModel
