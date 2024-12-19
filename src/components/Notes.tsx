import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function Notes() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <section className="mt-10 mb-5">
        <h3>Additional notes</h3>
        <p className="lg:w-1/2 text-justify">{invoiceContext.notes}</p>
      </section>
    </>
  )
}
