export interface UserContext {
  name: string;
  setUser: (name: string) => void;
  logout: () => void;
}

export interface UserState {
  name: string;
}

export const initialUserContext: UserContext = {
  name: '',
  setUser: () => {},
  logout: () => {},
};

export const initialUserState: UserState = {
  name: '',
};
