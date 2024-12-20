import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function Dates() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            Invoice No - <span className="font-bold">{invoiceContext.invoiceNumber}</span>
          </li>
          <li className="p-1">
            Invoice Date - <span className="font-bold">{invoiceContext.invoiceDate}</span>
          </li>
          <li className="p-1 ">
            Due Date - <span className="font-bold">{invoiceContext.dueDate}</span>
          </li>
        </ul>
      </article>
    </>
  )
}
