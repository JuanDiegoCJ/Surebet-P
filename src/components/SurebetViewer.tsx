import { useEffect, useState } from 'react';
import * as proto from '../proto/surebet';
import SurebetBlock from './SurebetBlock';

interface SurebetViewerProps {
  base64Data: string;
}

const SurebetViewer = ({ base64Data }: SurebetViewerProps) => {
  const [items, setItems] = useState<proto.surebet.ISurebetItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!base64Data?.trim()) {
      setItems([]);
      setError(null);
      return;
    }

    try {
      const cleanBase64 = base64Data.trim().replace(/[^A-Za-z0-9+/=]/g, '');
      const binaryString = atob(cleanBase64);
      const bytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));
      const message = proto.surebet.SurebetList.decode(bytes);
      setItems(message.items || []);
      setError(null);
    } catch (err) {
      let msg = 'Error al procesar los datos.';
      if (err instanceof DOMException && err.name === 'InvalidCharacterError') {
        msg = 'La cadena Base64 no es válida.';
      } else if (err instanceof Error) {
        msg = err.message;
      }
      setError(msg);
      setItems([]);
    }
  }, [base64Data]);

  if (!base64Data?.trim()) {
    return <p>No hay datos</p>;
  }

  if (error) {
    return <div className="text-red-600 font-medium">{error}</div>;
  }

  // Agrupamiento
  const grouped: Record<string, proto.surebet.ISurebetItem[]> = {};
  items.forEach(item => {
    if (item.arbid) {
      if (!grouped[item.arbid]) grouped[item.arbid] = [];
      grouped[item.arbid].push(item);
    }
  });

  const pairs = Object.values(grouped).filter(pair => pair.length >= 2);

  return (
    <div className="bg-slate-50 p-5 rounded-xl shadow-md">
      <div className="flex justify-between items-center pb-4 border-b mb-4">
        <h2 className="flex items-center gap-3 text-lg font-bold">
          Visualizador de Surebets
        </h2>
      </div>

      {pairs.length === 0 ? (
        <div className="text-center p-8 text-gray-500 italic">
          No se encontraron surebets.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {pairs.map(pair => (
            <SurebetBlock key={pair[0].arbid} pair={pair} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SurebetViewer;