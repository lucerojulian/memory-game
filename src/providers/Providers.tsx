import { FC, PropsWithChildren } from 'react';
import UserProvider from './userProvider/UserProvider';
import { BrowserRouter } from 'react-router-dom';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/memory-game/' : '/';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <UserProvider>{children}</UserProvider>
    </BrowserRouter>
  );
};

export default Providers;
