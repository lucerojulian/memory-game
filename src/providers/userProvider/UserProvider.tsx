import { FC, createContext, PropsWithChildren, useState } from 'react';
import {
  UserContext,
  UserState,
  initialUserContext,
  initialUserState,
} from './UserProvider.model';
import { localStorageGetItem } from '../../utils/localStorage';
import { UserNameLSKey } from '../../constants/localStorageKeys';
import { useNavigate } from 'react-router-dom';

export const Context = createContext<UserContext>(initialUserContext);

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<UserState>(
    localStorageGetItem(UserNameLSKey) || initialUserState,
  );

  const navigate = useNavigate();

  const setUser = (name: string) => {
    setState((prevState) => ({ ...prevState, name }));
  };

  const logout = () => {
    setState(initialUserState);
    localStorage.removeItem(UserNameLSKey);
    navigate('/');
  };

  const context = { ...state, setUser, logout };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default UserProvider;
