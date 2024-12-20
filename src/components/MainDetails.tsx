import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function MainDetails() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-3xl uppercase mb-1">{invoiceContext.name}</h2>
        <p>{invoiceContext.address}</p>
      </section>
    </>
  )
}
