import { FC } from 'react';
import { USER_NAME_LS_KEY } from '../../constants/localStorageKeys';
import useUser from '../../hooks/useUser';
import { UserState } from '../../providers/userProvider/UserProvider.model';
import { localStorageSaveItem } from '../../utils/localStorage';
import { LoginFormView } from './LoginFormView';

interface Props {
  onLogIn: () => void;
}

const LogInForm: FC<Props> = ({ onLogIn }) => {
  const { setUser } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;

    localStorageSaveItem<UserState>(USER_NAME_LS_KEY, { name });
    setUser(name);
    onLogIn();
  };

  return <LoginFormView onSubmit={handleSubmit} />;
};

export default LogInForm;
