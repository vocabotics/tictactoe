import { create } from 'zustand';
import { GameState, Player, Board } from '@/types/game';

interface GameStore extends GameState {
  makeMove: (index: number) => void;
  resetGame: () => void;
  toggleDisco: () => void;
}

const initialState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  winningCombination: null,
  discoMode: false,
};

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const checkWinner = (board: Board): { winner: Player | 'draw' | null; combination: number[] | null } => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, combination: combo };
    }
  }
  if (board.every(cell => cell !== null)) {
    return { winner: 'draw', combination: null };
  }
  return { winner: null, combination: null };
};

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,
  makeMove: (index) => {
    set(state => {
      if (state.winner || state.board[index]) return state;

      const newBoard = [...state.board];
      newBoard[index] = state.currentPlayer;

      const { winner, combination } = checkWinner(newBoard);

      return {
        board: newBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        winner,
        winningCombination: combination,
      };
    });
  },
  resetGame: () => set(initialState),
  toggleDisco: () => set(state => ({ discoMode: !state.discoMode })),
}));