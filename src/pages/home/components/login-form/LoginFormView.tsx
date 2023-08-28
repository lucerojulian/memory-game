import { FormEvent } from 'react';
import PrimaryButton from '../../../../shared/controls/PrimaryButton';

type Props = {
  onSubmit(_event: FormEvent<HTMLFormElement>): void;
};

export const LoginFormView = ({ onSubmit }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
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

export default LoginFormView;
