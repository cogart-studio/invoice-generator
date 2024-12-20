import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function Header() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <header className="flex flex-row items-center mb-5 justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoice</h1>
        </div>

        {/* Display logo */}
        {invoiceContext.logo && (
          <div className="logo">
            <img
              src={invoiceContext.logo}
              alt="Company Logo"
              style={{ width: '50px', height: '50px', margin: 'auto', objectFit: 'contain' }}
            />
          </div>
        )}
      </header>
    </>
  )
}
