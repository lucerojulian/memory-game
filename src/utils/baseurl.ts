const isOnVercel = import.meta.env?.VERCEL_ENV === 'production';
const isDevelopment = import.meta.env?.NODE_ENV !== 'production';

export const baseUrl = isDevelopment || isOnVercel ? '/' : '/memory-game/';
