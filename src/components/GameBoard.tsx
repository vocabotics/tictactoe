import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { Cell } from '@/types/game';

export function GameBoard() {
  const { board, makeMove, winningCombination } = useGameStore();

  const renderCell = (cell: Cell, index: number) => {
    const isWinning = winningCombination?.includes(index);

    return (
      <motion.button
        key={index}
        className={`w-20 h-20 border-2 border-primary flex items-center justify-center text-4xl font-bold
          ${isWinning ? 'bg-primary/20' : 'hover:bg-primary/10'}`}
        onClick={() => makeMove(index)}
        whileHover={{ scale: cell ? 1 : 1.05 }}
        whileTap={{ scale: cell ? 1 : 0.95 }}
        disabled={!!cell}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: cell ? 1 : 0 }}
          className="text-primary"
        >
          {cell}
        </motion.span>
      </motion.button>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-2 bg-card rounded-lg shadow-lg">
      {board.map((cell, index) => renderCell(cell, index))}
    </div>
  );
}