// this file might be also our redux slice
import React from 'react'
import MockedProducts from '../../__mocks__/products'
import { ProductType } from '../types'

function useProductModel() {
  const getProducts = (query?: string): Promise<ProductType[]> => {
    // the api service call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (query) {
          resolve(MockedProducts.filter((item) => item.name.includes(query)))
        } else {
          resolve(MockedProducts)
        }
      }, 500)
    })
  }

  const getProduct = (id: number): Promise<ProductType> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MockedProducts.find((item) => item.id === id))
      }, 500)
    })
  }

  return {
    getProducts,
    getProduct,
  }
}

export default useProductModel
