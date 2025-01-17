export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

export interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player | 'draw' | null;
  winningCombination: number[] | null;
  discoMode: boolean;
}