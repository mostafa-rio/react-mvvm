import React from 'react';
import useProductListViewController from './useProductListViewController';

function ProductList() {
  const { handleInputChange, handleOrder, query, productList } =
    useProductListViewController();
  return (
    <div className="container py-3">
      <div className="form-group">
        <input
          type="text"
          placeholder="Search"
          id="search-input"
          value={query}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="row">
        {productList.map((item) => (
          <div className="col-4 mb-3" key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <p>{item.name}</p>
                <button
                  onClick={() => handleOrder(item.id)}
                  className="btn btn-primary"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
