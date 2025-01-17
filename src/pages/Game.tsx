import { motion } from 'framer-motion';
import { GameBoard } from '@/components/GameBoard';
import { GameStatus } from '@/components/GameStatus';
import { Button } from '@/components/ui/button';
import { useGameStore } from '@/store/gameStore';

export function Game() {
  const { discoMode, toggleDisco } = useGameStore();

  return (
    <motion.div
      className={`min-h-screen flex flex-col items-center justify-center p-4 space-y-8 transition-colors duration-500 ${discoMode ? 'animate-disco' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold text-primary">Tic Tac Toe</h1>
      <Button
        variant="outline"
        onClick={toggleDisco}
        className="absolute top-4 right-4"
      >
        {discoMode ? '🕺 Disco ON' : '💡 Disco OFF'}
      </Button>
      <GameStatus />
      <GameBoard />
    </motion.div>
  );
}