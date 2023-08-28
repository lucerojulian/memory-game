import { GAME_MODES } from '../../../models/gameDifficulty.model';
import { getGameBoardGrid } from '../utils/getGameBoardGrid';

export const EASY_MODE_TOTAL_ANIMALS = 6;
export const NORMAL_MODE_TOTAL_ANIMALS = 10;
export const HARD_MODE_TOTAL_ANIMALS = 16;

export const GAMEBOARD_GRID_BY_GAME_MODE = {
  [GAME_MODES.EASY_MODE]: getGameBoardGrid(GAME_MODES.EASY_MODE),
  [GAME_MODES.NORMAL_MODE]: getGameBoardGrid(GAME_MODES.NORMAL_MODE),
  [GAME_MODES.HARD_MODE]: getGameBoardGrid(GAME_MODES.HARD_MODE),
};

export const ANIMALS_BY_GAME_MODE = {
  [GAME_MODES.EASY_MODE]: EASY_MODE_TOTAL_ANIMALS,
  [GAME_MODES.NORMAL_MODE]: NORMAL_MODE_TOTAL_ANIMALS,
  [GAME_MODES.HARD_MODE]: HARD_MODE_TOTAL_ANIMALS,
};
