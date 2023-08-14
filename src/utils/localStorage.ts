export const localStorageGetItem = <T>(key: string): T => {
  return JSON.parse(localStorage.getItem(key) || '{}');
};

export const localStorageSaveItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
