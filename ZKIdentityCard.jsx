import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

/**
 * @dev UI for verifying ZK-Identity claims (Repo 94).
 */
export const ZKIdentityCard = ({ isVerified, claims }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-zinc-800 shadow-2xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">ZK-Identity</h2>
          <p className="text-xs text-zinc-500">Polygon ID Protocol</p>
        </div>
        {isVerified ? (
          <ShieldCheck className="text-emerald-500" size={32} />
        ) : (
          <ShieldAlert className="text-amber-500" size={32} />
        )}
      </div>
      
      <div className="space-y-2">
        {claims.map((claim, i) => (
          <div key={i} className="flex justify-between text-sm py-2 border-b border-zinc-800/50">
            <span className="text-zinc-400">{claim.key}</span>
            <span className="text-white font-mono">{claim.status}</span>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-2 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
        Generate Proof
      </button>
    </div>
  );
};
