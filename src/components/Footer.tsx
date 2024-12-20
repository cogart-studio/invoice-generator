import { useInvoiceContext } from '../context/InvoiceContext.tsx'

export default function Footer() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <footer className="footer border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your name:</span> {invoiceContext.name}
          </li>
          <li>
            <span className="font-bold">Your email:</span> {invoiceContext.email}
          </li>
          <li>
            <span className="font-bold">Phone number:</span> {invoiceContext.phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {invoiceContext.bankName}
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {invoiceContext.name}
          </li>
          <li>
            <span className="font-bold">Account number:</span> {invoiceContext.bankAccount}
          </li>
          <li>
            <span className="font-bold">Website:</span>{' '}
            <a href={invoiceContext.website} target="_blank" rel="noopenner noreferrer">
              {invoiceContext.website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}
