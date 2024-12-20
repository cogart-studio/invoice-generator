import { InvoiceForm } from './components/InvoiceForm.tsx'
import { InvoicePreview } from './components/InvoicePreview.tsx'

function App() {
  return (
    <main className="m-auto p-5 xl:grid grid-cols-2 gap-10 xl:items-start max-width-[1920px]">
      <InvoiceForm />
      <InvoicePreview />
    </main>
  )
}

export default App
