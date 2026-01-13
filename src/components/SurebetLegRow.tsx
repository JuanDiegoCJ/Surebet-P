import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import * as proto from '../proto/surebet';

interface Props {
  leg: proto.surebet.ISurebetItem;
  isEven: boolean;
}

const SurebetLegRow = ({ leg, isEven }: Props) => {
  return (
    <div className={`grid grid-cols-[80px_1fr_200px_80px] items-center p-1 border-b border-slate-100 last:border-b-0 ${isEven ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="flex items-center justify-center gap-2">
        <img
          src={`https://placehold.co/70x25?text=${encodeURIComponent(leg.bookmaker || 'N/A')}`}
          alt={leg.bookmaker || 'Casa'}
          className="max-w-[70px] max-h-[25px] object-contain border border-amber-50 rounded-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/70x25?text=' + encodeURIComponent(leg.bookmaker || 'N/A');
          }}
        />
      </div>
      <div className="px-10">
        <div className="font-semibold text-sm text-slate-900 leading-tight">{leg.eventname || '—'}</div>
        <div className="text-[0.7rem] text-slate-500 italic truncate" title={leg.leaguename || ''}>
          {leg.leaguename || '—'}
        </div>
      </div>
      <div className="text-center pr-5 text-[0.85rem] text-slate-600 font-medium">
        {leg.arboutcome || '—'}
      </div>
      <div className="flex items-center justify-end gap-1 font-bold text-base text-slate-800">
        {leg.directionodd === 'UP' ? (
          <FaArrowUp className="text-emerald-500" size={16} />
        ) : leg.directionodd === 'DOWN' ? (
          <FaArrowDown className="text-red-500" size={16} />
        ) : null}
        {leg.odd || '—'}
      </div>
    </div>
  );
};

export default SurebetLegRow;