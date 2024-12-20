import { useInvoiceContext } from '../context/InvoiceContext.tsx'
import ReactToPrint from 'react-to-print'
import Header from './Header.tsx'
import MainDetails from './MainDetails.tsx'
import ClientDetails from './ClientDetails.tsx'
import Dates from './Dates.tsx'
import Table from './Table.tsx'
import Notes from './Notes.tsx'

type InvoicePreviewProps = {}

export const InvoicePreview: React.FC<InvoicePreviewProps> = ({}) => {
  const invoiceContext = useInvoiceContext()
  return (
    <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
      <ReactToPrint
        trigger={() => (
          <button className="bg-red-400 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
            Print / Download
          </button>
        )}
        content={() => invoiceContext.componentRef.current}
      />
      <div ref={invoiceContext.componentRef as React.RefObject<HTMLDivElement>} className="p-5">
        <Header />

        <MainDetails />

        <ClientDetails />

        <Dates />

        <Table />

        <Notes />

        {/*<Footer />*/}
      </div>
    </div>
  )
}
