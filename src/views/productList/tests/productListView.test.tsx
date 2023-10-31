import products from '../../../../__mocks__/products';
const handleOrderClick = jest.fn();
import useProductListViewController from '../useProductListViewController';
const mockedControllerReturns: ReturnType<typeof useProductListViewController> =
  {
    ...(jest.requireActual('../useProductListViewController') as any),
  };
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '..';
import { BrowserRouter } from 'react-router-dom';
jest.mock('../useProductListViewController', () => {
  return () => mockedControllerReturns;
});

describe('ProductList View', () => {
  const renderer = () =>
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>,
    );

  it('renders products list', async () => {
    mockedControllerReturns.productList = products.slice(0, 2);
    renderer();
    products.slice(0, 2).forEach(async (item) => {
      expect((await screen.findByAltText(item.name)).getAttribute('src')).toBe(
        item.image,
      );
      expect(await screen.findByText(item.name)).toBeInTheDocument();
    });
  });
});
