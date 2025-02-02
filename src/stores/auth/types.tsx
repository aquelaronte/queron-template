export interface IAuthState {
  token: string | null;
}

export interface IAuthActions {
  setToken: (token: string) => void;
  clearToken: () => void;
}

export type AuthStore = IAuthState & IAuthActions;
