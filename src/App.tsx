import React, { useState } from 'react';
import './App.css';
import { generatePDF } from './utils/helper';

function App() {
  const [invoiceInfo, setInvoiceInfo] = useState({
    invoiceFrom: '',
    invoiceTo: '',
    date: '',
    dueDate: '',
    poNumber: '',
    itemName: '',
    itemQuantity: 0,
    itemRate: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'itemRate') {
      setInvoiceInfo({
        ...invoiceInfo,
        [name]: Math.round(parseFloat(value) * 100) / 100,
      });
      return;
    }
    setInvoiceInfo({
      ...invoiceInfo,
      [name]: value,
    });
  };
  return (
    <>
      <h1>Create an Invoice</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='form-input'>
          <label>Invoice From</label>
          <input
            name='invoiceFrom'
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <div className='form-input'>
          <label>Invoice To</label>
          <input
            name='invoiceTo'
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <div className='form-input'>
          <label>Date</label>
          <input
            name='date'
            type='date'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <div className='form-input'>
          <label>Due Date</label>
          <input
            name='dueDate'
            type='date'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <div className='form-input'>
          <label>PO Number</label>
          <input
            name='poNumber'
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <div className='form-input'>
          <label>Item Name</label>
          <input
            name='itemName'
            type='text'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <div className='form-input'>
          <label>Item Quantity</label>
          <input
            name='itemQuantity'
            type='number'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <div className='form-input'>
          <label>Item Rate</label>
          <input
            name='itemRate'
            type='number'
            step='0.01'
            placeholder=''
            onChange={handleInputChange}
          />
        </div>
        <button onClick={(e) => {
          e.preventDefault()
          generatePDF(invoiceInfo)
        }}>Generate Invoice</button>
      </form>
    </>
  );
}

export default App;
