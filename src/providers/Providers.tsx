import { FC, PropsWithChildren } from 'react';
import UserProvider from './userProvider/UserProvider';
import { BrowserRouter } from 'react-router-dom';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter basename="/memory-game">
      <UserProvider>{children}</UserProvider>
    </BrowserRouter>
  );
};

export default Providers;
