import { FC } from 'react';
import BlueButton from '../shared/controls/BlueButton';
import LimeButton from '../shared/controls/LimeButton';
import RedButton from '../shared/controls/RedButton';
import { DIFFICULTY } from '../constants/gameDifficulty';

interface Props {
  onChooseDifficulty: (mode: keyof typeof DIFFICULTY) => void;
}

const DifficultyMenu: FC<Props> = ({ onChooseDifficulty }) => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onChooseDifficulty(event.currentTarget.name as keyof typeof DIFFICULTY);
  };

  return (
    <section className="w-full max-w-[360px] m-auto mt-8">
      <h2 className="font-sans text-white text-lg mb-4">
        Choose the mode to play:
      </h2>
      <div className="flex flex-col gap-2">
        <LimeButton name={DIFFICULTY.EASY_MODE} onClick={handleOnClick}>
          🙂 Easy
        </LimeButton>
        <BlueButton name={DIFFICULTY.NORMAL_MODE} onClick={handleOnClick}>
          😎 Normal
        </BlueButton>
        <RedButton name={DIFFICULTY.HARD_MODE} onClick={handleOnClick}>
          🤪 Hard
        </RedButton>
      </div>
    </section>
  );
};

export default DifficultyMenu;
