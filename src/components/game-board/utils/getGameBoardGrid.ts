import { DIFFICULTY } from '../../../constants/gameDifficulty';

export const getGameBoardGrid = (mode: keyof typeof DIFFICULTY) => {
  const TAILWIND_GRID_BY_MODE = {
    [DIFFICULTY.EASY_MODE]:
      'grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(4,_1fr)] lg:grid-rows-[repeat(3,_1fr)] lg:grid-cols-[repeat(4,_1fr)]',
    [DIFFICULTY.NORMAL_MODE]:
      'grid-cols-[repeat(4,_1fr)] grid-rows-[repeat(5,_1fr)] lg:grid-rows-[repeat(4,_1fr)] lg:grid-cols-[repeat(5,_1fr)]',
    [DIFFICULTY.HARD_MODE]:
      'grid-cols-[repeat(4,_1fr)] grid-rows-[repeat(8,_1fr)] sm:grid-rows-[repeat(4,_1fr)] sm:grid-cols-[repeat(8,_1fr)]',
  };

  return TAILWIND_GRID_BY_MODE[mode];
};
