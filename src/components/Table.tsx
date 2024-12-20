import React from 'react'
import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function Table() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <div className="table-container">
        <table width="100%" className="mb-10">
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
                  <td>{price}</td>
                  <td>{amount}</td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </table>

        {/* show tax table */}
        {invoiceContext.isTaxEnabled && (
          <table width="100%" className="mb-10">
            <thead>
              <tr className="bg-gray-100 p-1">
                <td className="font-bold">Description</td>
                <td className="font-bold">Rate</td>
                <td className="font-bold">Amount</td>
              </tr>
            </thead>

            <tbody>
              <tr className="h-10">
                <td>Tax</td>
                <td>{`${invoiceContext.taxRate}%`}</td>
                <td>{invoiceContext.taxAmount.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          {invoiceContext.currency} {invoiceContext.total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
