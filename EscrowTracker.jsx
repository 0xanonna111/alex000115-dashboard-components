import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Lock } from 'lucide-react';

/**
 * @dev Visualizes milestone progress for the Freelance Escrow (Repo 81).
 */
export const EscrowTracker = ({ milestones, currentStep }) => {
  return (
    <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
      <h3 className="text-zinc-400 text-sm mb-6 uppercase tracking-widest">Escrow Progress</h3>
      <div className="space-y-4">
        {milestones.map((m, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center gap-4 p-3 rounded-lg ${idx <= currentStep ? 'bg-blue-500/10' : 'bg-transparent'}`}
          >
            {idx < currentStep ? (
              <CheckCircle2 className="text-blue-500" size={20} />
            ) : idx === currentStep ? (
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }}>
                <Circle className="text-blue-400" size={20} />
              </motion.div>
            ) : (
              <Lock className="text-zinc-600" size={20} />
            )}
            <span className={idx <= currentStep ? 'text-zinc-100' : 'text-zinc-500'}>{m.label}</span>
            <span className="ml-auto text-xs text-zinc-500">{m.amount} ETH</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
