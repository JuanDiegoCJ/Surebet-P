import { useEffect, useState } from 'react';
import * as proto from '../proto/surebet';

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
      // Limpia la cadena: elimina TODO lo que no sea Base64
      const cleanBase64 = base64Data.trim().replace(/[^A-Za-z0-9+/=]/g, '');

      // Decodifica Base64 → binario → Uint8Array
      const binaryString = atob(cleanBase64);
      const bytes = Uint8Array.from(binaryString, c => c.charCodeAt(0));

      // Decodifica protobuf
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

  return (
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Evento</th>
          <th className="border border-gray-300 px-4 py-2">Deporte</th>
          <th className="border border-gray-300 px-4 py-2">Ganancia (%)</th>
          <th className="border border-gray-300 px-4 py-2">Casa</th>
          <th className="border border-gray-300 px-4 py-2">Cuota</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan={5} className="px-4 py-2 text-center text-gray-500">
              No se encontraron elementos.
            </td>
          </tr>
        ) : (
          items.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.eventname || '—'}</td>
              <td className="border border-gray-300 px-4 py-2">{item.sportname || '—'}</td>
              <td className="border border-gray-300 px-4 py-2">{item.arbprofit || '—'}</td>
              <td className="border border-gray-300 px-4 py-2">{item.bookmaker || '—'}</td>
              <td className="border border-gray-300 px-4 py-2">{item.odd || '—'}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default SurebetViewer;