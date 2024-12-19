import ReactToPrint from 'react-to-print'

import ClientDetails from './components/ClientDetails.tsx'
import Dates from './components/Dates.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import MainDetails from './components/MainDetails.tsx'
import Notes from './components/Notes.tsx'
import Table from './components/Table.tsx'
import TableForm from './components/TableForm.tsx'
import { useInvoiceContext } from './context/InvoiceContext.tsx'

function App() {
  const invoiceContext = useInvoiceContext()

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: '1920px',
          margin: 'auto',
        }}
      >
        <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              {/* Add logo input */}
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col mb-4">
                  <label htmlFor="logo">Company Logo</label>
                  <input
                    type="file"
                    name="logo"
                    id="logo"
                    accept="image/*"
                    onChange={invoiceContext.handleLogoChange}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    maxLength={56}
                    autoComplete="off"
                    value={invoiceContext.name}
                    onChange={(e) => invoiceContext.setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    maxLength={96}
                    value={invoiceContext.address}
                    onChange={(e) => invoiceContext.setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    maxLength={255}
                    autoComplete="off"
                    value={invoiceContext.email}
                    onChange={(e) => invoiceContext.setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    maxLength={96}
                    autoComplete="off"
                    value={invoiceContext.website}
                    onChange={(e) => invoiceContext.setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    maxLength={12}
                    autoComplete="off"
                    value={invoiceContext.phone}
                    onChange={(e) => invoiceContext.setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={56}
                    autoComplete="off"
                    value={invoiceContext.bankName}
                    onChange={(e) => invoiceContext.setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">Enter your bank account number</label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    maxLength={20}
                    autoComplete="off"
                    value={invoiceContext.bankAccount}
                    onChange={(e) => invoiceContext.setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    maxLength={56}
                    autoComplete="off"
                    value={invoiceContext.clientName}
                    onChange={(e) => invoiceContext.setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter your client's address</label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    maxLength={96}
                    autoComplete="off"
                    value={invoiceContext.clientAddress}
                    onChange={(e) => invoiceContext.setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceContext.invoiceNumber}
                    onChange={(e) => invoiceContext.setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>

                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceContext.invoiceDate}
                    onChange={(e) => invoiceContext.setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceContext.dueDate}
                    onChange={(e) => invoiceContext.setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm />
              </article>

              {/*  tax calculation*/}
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="isTaxEnabled">{`Include Tax? ${invoiceContext.isTaxEnabled ? 'Yes' : 'No'}`}</label>
                  <input
                    className="self-start w-5 h-5"
                    type="checkbox"
                    name="isTaxEnabled"
                    id="isTaxEnabled"
                    checked={invoiceContext.isTaxEnabled}
                    onChange={(e) => invoiceContext.setIsTaxEnabled(e.target.checked)}
                  />
                </div>

                {invoiceContext.isTaxEnabled && (
                  <div className="flex flex-col">
                    <label htmlFor="taxRate">Tax Rate (%)</label>
                    <input
                      type="number"
                      name="taxRate"
                      id="taxRate"
                      placeholder="Enter tax rate"
                      value={invoiceContext.taxRate}
                      onChange={(e) => invoiceContext.setTaxRate(Number(e.target.value))}
                    />
                  </div>
                )}
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols={30}
                rows={10}
                placeholder="Additional notes to the client"
                maxLength={500}
                value={invoiceContext.notes}
                onChange={(e) => invoiceContext.setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
          <ReactToPrint
            trigger={() => (
              <button className="bg-red-400 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            content={() => invoiceContext.componentRef.current}
          />
          <div ref={invoiceContext.componentRef} className="p-5">
            <Header />

            <MainDetails />

            <ClientDetails />

            <Dates />

            <Table />

            <Notes />

            <Footer />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
