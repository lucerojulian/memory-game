import { useContext } from 'react';
import { UserContext } from '../providers/userProvider/UserProvider.model';
import { Context } from '../providers/userProvider/UserProvider';

const useUser: () => UserContext = () => useContext(Context);

export default useUser;
