import { FaTrash, FaArrowRight } from 'react-icons/fa';
import SurebetLegRow from './SurebetLegRow';
import * as proto from '../proto/surebet';

interface Props {
  pair: proto.surebet.ISurebetItem[];
}

const getMarkerColorClass = (color: string | null | undefined) => {
  switch (color) {
    case 'yellow': return 'bg-[#fc783a]';
    case 'gray': return 'bg-gray-500';
    case 'green': return 'bg-green-500';
    default: return 'bg-blue-500';
  }
};

const SurebetBlock = ({ pair }: Props) => {
  const first = pair[0];

  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm w-full">
      <div className="flex items-center bg-[#333333] text-white h-10 font-sans">
        <div className="bg-[#10b981] h-full flex items-center justify-center px-5 font-bold text-lg min-w-[100px]">
          {first.arbprofit || '—'}
        </div>
        <div className="flex items-center px-3 font-semibold text-[0.95rem] flex-1">
          {first.middle ? (
            <div className="mr-3 h-4 flex items-center justify-center text-xs font-bold rounded bg-[#fc783a] px-2 min-w-[1.5rem]">
              {first.middle}
            </div>
          ) : (
            <div className={`mr-3 h-4 rounded ${getMarkerColorClass(first.color)} w-1`} />
          )}
          {first.sportname || '—'}
        </div>
        <div className="flex items-center pr-4 gap-4 text-[0.85rem] text-slate-200">
          <span className="text-white">{first.arbgenerationtime || '—'}</span>
          <div className="cursor-pointer p-1.5 border border-rose-500 text-rose-500 hover:text-rose-700 hover:border-rose-700 transition-colors rounded">
            <FaTrash size={12} />
          </div>
          <div className="cursor-pointer hover:opacity-80">
            <FaArrowRight size={12} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <SurebetLegRow leg={first} isEven={false} />
        {pair[1] && <SurebetLegRow leg={pair[1]} isEven={true} />}
      </div>
    </div>
  );
};

export default SurebetBlock;