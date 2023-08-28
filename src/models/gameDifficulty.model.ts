export const GAME_MODES = {
  EASY_MODE: 'EASY_MODE',
  NORMAL_MODE: 'NORMAL_MODE',
  HARD_MODE: 'HARD_MODE',
} as const;

export type GameMode = typeof GAME_MODES;
export type GameModeKey = keyof GameMode;
