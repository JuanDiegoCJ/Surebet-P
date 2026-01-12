import { useState } from 'react';
import SurebetViewer from './components/SurebetViewer';

function App() {
  const [input, setInput] = useState<string>('');

  return (
    <div>
      <h1>Visualizador de Surebets</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Inserta el contenido Base64..."
        className="w-full h-32 p-3 border border-gray-300 rounded-md"
      />
      <SurebetViewer base64Data={input} />
    </div>
  );
}

export default App;