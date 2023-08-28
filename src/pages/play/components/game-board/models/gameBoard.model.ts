import { GAME_MODES } from '../../../../../models/gameDifficulty.model';
import { getGameBoardGrid } from '../utils/getGameBoardGrid';

const { EASY_MODE, NORMAL_MODE, HARD_MODE } = GAME_MODES;

export const EASY_MODE_TOTAL_ANIMALS = 6;
export const NORMAL_MODE_TOTAL_ANIMALS = 10;
export const HARD_MODE_TOTAL_ANIMALS = 16;

export const GAMEBOARD_GRID_BY_GAME_MODE = {
  [EASY_MODE]: getGameBoardGrid(EASY_MODE),
  [NORMAL_MODE]: getGameBoardGrid(NORMAL_MODE),
  [HARD_MODE]: getGameBoardGrid(HARD_MODE),
};

export const ANIMALS_BY_GAME_MODE = {
  [EASY_MODE]: EASY_MODE_TOTAL_ANIMALS,
  [NORMAL_MODE]: NORMAL_MODE_TOTAL_ANIMALS,
  [HARD_MODE]: HARD_MODE_TOTAL_ANIMALS,
};
