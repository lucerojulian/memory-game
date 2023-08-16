import { FC, PropsWithChildren } from 'react';
import UserProvider from './userProvider/UserProvider';
import { BrowserRouter } from 'react-router-dom';
import { baseUrl } from '../utils/baseurl';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter basename={baseUrl}>
      <UserProvider>{children}</UserProvider>
    </BrowserRouter>
  );
};

export default Providers;
