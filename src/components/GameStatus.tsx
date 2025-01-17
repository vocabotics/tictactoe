import { Button } from '@/components/ui/button';
import { useGameStore } from '@/store/gameStore';
import { motion } from 'framer-motion';

export function GameStatus() {
  const { winner, currentPlayer, resetGame } = useGameStore();

  return (
    <motion.div
      className="text-center space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-bold text-primary">
        {winner
          ? winner === 'draw'
            ? "It's a Draw!"
            : `Player ${winner} Wins!`
          : `Current Player: ${currentPlayer}`}
      </h2>
      {winner && (
        <Button
          variant="outline"
          onClick={resetGame}
          className="w-full max-w-xs"
        >
          Play Again
        </Button>
      )}
    </motion.div>
  );
}