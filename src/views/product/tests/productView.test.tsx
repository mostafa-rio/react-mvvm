const mockedProduct: ProductType = {
  id: 123,
  name: 'Jest Cupcake',
  description: 'Cupcake from Jest bakery',
  image: 'imagePath',
};

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from '..';
import useProductViewController from '../useProductViewController';
import { ProductType } from '../../../types';

jest.mock(`../useProductViewController`, () => {
  return () => ({
    product: mockedProduct,
  });
});

describe('ProductView', () => {
  it('renders product info', async () => {
    render(<Product />);
    expect((await screen.findByRole('img')).getAttribute('src')).toBe(
      mockedProduct.image,
    );
    expect(
      await screen.findByText(mockedProduct.description),
    ).toBeInTheDocument();
    expect(await screen.findByText(mockedProduct.name)).toBeInTheDocument();
    expect(await screen.findByText('Submit Order')).toBeInTheDocument();
  });
});
