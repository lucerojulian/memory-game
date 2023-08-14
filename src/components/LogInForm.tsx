import { FC } from 'react';
import { UserNameLSKey } from '../constants/localStorageKeys';
import useUser from '../hooks/useUser';
import { UserState } from '../providers/userProvider/UserProvider.model';
import PrimaryButton from '../shared/controls/PrimaryButton';
import { localStorageSaveItem } from '../utils/localStorage';

interface Props {
  onLogIn: () => void;
}

const LogInForm: FC<Props> = ({ onLogIn }) => {
  const { setUser } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;

    localStorageSaveItem<UserState>(UserNameLSKey, { name });
    setUser(name);
    onLogIn();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center align-center p-6 gap-2 rounded-md bg-white w-[328px]"
    >
      <p className="font-sans font-medium">Please log in to play!</p>
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
          autoFocus
          className="w-full py-2 px-4 border rounded border-gray-600/20 bg-white text-black font-sans placeholder:text-gray-400 mb"
        />
      </label>
      <PrimaryButton type="submit" title="Click to play and have fun!">
        Play
      </PrimaryButton>
    </form>
  );
};

export default LogInForm;
