import { motion } from 'framer-motion';
import { GameBoard } from '@/components/GameBoard';
import { GameStatus } from '@/components/GameStatus';

export function Game() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold text-primary">Tic Tac Toe</h1>
      <GameStatus />
      <GameBoard />
    </motion.div>
  );
}