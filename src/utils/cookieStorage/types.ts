export type CookieStorage = {
  setItem: (key: string, value: unknown) => unknown | null;
  getItem: (key: string) => unknown;
  removeItem: (key: string) => void;
};
