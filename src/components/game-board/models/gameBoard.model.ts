import { DIFFICULTY } from '../../../constants/gameDifficulty';
import { getGameBoardGrid } from '../utils/getGameBoardGrid';

export const EASY_MODE_TOTAL_ANIMALS = 6;
export const NORMAL_MODE_TOTAL_ANIMALS = 10;
export const HARD_MODE_TOTAL_ANIMALS = 16;

export const GAMEBOARD_GRID_BY_DIFFICULTY = {
  [DIFFICULTY.EASY_MODE]: getGameBoardGrid(DIFFICULTY.EASY_MODE),
  [DIFFICULTY.NORMAL_MODE]: getGameBoardGrid(DIFFICULTY.NORMAL_MODE),
  [DIFFICULTY.HARD_MODE]: getGameBoardGrid(DIFFICULTY.HARD_MODE),
};

export const ANIMALS_BY_DIFFICULTY = {
  [DIFFICULTY.EASY_MODE]: EASY_MODE_TOTAL_ANIMALS,
  [DIFFICULTY.NORMAL_MODE]: NORMAL_MODE_TOTAL_ANIMALS,
  [DIFFICULTY.HARD_MODE]: HARD_MODE_TOTAL_ANIMALS,
};
