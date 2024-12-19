import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function ClientDetails() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{invoiceContext.clientName}</h2>
        <p>{invoiceContext.clientAddress}</p>
      </section>
    </>
  )
}
