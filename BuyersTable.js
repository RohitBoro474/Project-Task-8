
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BuyersTable() {
  const [buyers, setBuyers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get(`/api/buyers?search=${search}&sortField=${sortField}&sortOrder=${sortOrder}`)
      .then(res => setBuyers(res.data));
  }, [search, sortField, sortOrder]);

  return (
    <div>
      <input placeholder="Search buyers..." value={search} onChange={e => setSearch(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortField('name')}>Name</th>
            <th onClick={() => setSortField('email')}>Email</th>
            <th onClick={() => setSortField('phone')}>Phone</th>
            <th onClick={() => setSortField('address')}>Address</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map(buyer => (
            <tr key={buyer.id}>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>{buyer.phone}</td>
              <td>{buyer.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BuyersTable;
