
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    axios.get(`/api/products?category=${categoryFilter}`)
      .then(res => setProducts(res.data));
  }, [categoryFilter]);

  const getStockColor = (stock) => {
    if (stock > 10) return "green";
    if (stock > 0) return "yellow";
    return "red";
  };

  return (
    <div>
      <select onChange={e => setCategoryFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        {/* ...other categories */}
      </select>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.category}</td>
              <td>{prod.price}</td>
              <td style={{ color: getStockColor(prod.stock) }}>{prod.stock}</td>
              <td>{prod.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
;
