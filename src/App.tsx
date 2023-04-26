import './App.css';
import { generatePDF } from './utils/helper';

function App() {
  return (
    <>
      <button onClick={generatePDF}>Generate PDF</button>
    </>
  );
}

export default App;
