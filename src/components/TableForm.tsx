import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DeleteModal from './DeleteModal.tsx'
import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function TableForm() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={invoiceContext.handleSubmit}>
        <div className="md:grid grid-cols-4 gap-5">
          <div className="flex flex-col">
            <label htmlFor="description">Item description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Item description"
              maxLength={96}
              value={invoiceContext.description}
              onChange={(e) => invoiceContext.setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              maxLength={33}
              value={invoiceContext.quantity}
              onChange={(e) => invoiceContext.setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              maxLength={33}
              value={invoiceContext.price}
              onChange={(e) => invoiceContext.setPrice(Number(e.target.value))}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p className="h-[47px] flex items-center px-2">
              {invoiceContext.amount.toLocaleString()}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-400 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
        >
          {invoiceContext.isEditing ? 'Finish Editing' : 'Add Table Item'}
        </button>
      </form>

      {/* Table items */}

      <table width="100%" className="mb-10 overflow-auto">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {invoiceContext.list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price.toLocaleString()}</td>
                <td className="amount">{amount.toLocaleString()}</td>
                <td>
                  <button onClick={() => invoiceContext.editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => invoiceContext.setShowModal(true)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
            {invoiceContext.showModal && <DeleteModal id={id} />}
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          {invoiceContext.currency} {invoiceContext.total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
