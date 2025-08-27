//
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ExportToExcel } from './ExportToExcel'; // See next section for code

function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  useEffect(() => {
    axios.get(`/api/transactions?search=${search}&start=${dateRange.start}&end=${dateRange.end}`)
      .then(res => setTransactions(res.data));
  }, [search, dateRange]);

  return (
    <div>
      <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <input type="date" onChange={e => setDateRange({...dateRange, start: e.target.value})} />
      <input type="date" onChange={e => setDateRange({...dateRange, end: e.target.value})} />
      <ExportToExcel apiData={transactions} fileName={'Transactions'} />
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Buyer Name</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(txn => (
            <tr key={txn.id}>
              <td>{txn.id}</td>
              <td>{txn.buyerName}</td>
              <td>{txn.productName}</td>
              <td>{txn.date}</td>
              <td>{txn.quantity}</td>
              <td>{txn.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionsTable;
