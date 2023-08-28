import { GAME_MODES, GameModeKey } from '../../../models/gameDifficulty.model';

export const getGameBoardGrid = (mode: GameModeKey) => {
  const TAILWIND_GRID_BY_MODE: Record<GameModeKey, string> = {
    [GAME_MODES.EASY_MODE]:
      'grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(4,_1fr)] lg:grid-rows-[repeat(3,_1fr)] lg:grid-cols-[repeat(4,_1fr)]',
    [GAME_MODES.NORMAL_MODE]:
      'grid-cols-[repeat(4,_1fr)] grid-rows-[repeat(5,_1fr)] lg:grid-rows-[repeat(4,_1fr)] lg:grid-cols-[repeat(5,_1fr)]',
    [GAME_MODES.HARD_MODE]:
      'grid-cols-[repeat(4,_1fr)] grid-rows-[repeat(8,_1fr)] sm:grid-rows-[repeat(4,_1fr)] sm:grid-cols-[repeat(8,_1fr)]',
  };

  return TAILWIND_GRID_BY_MODE[mode];
};
