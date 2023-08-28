import { GAME_MODES } from '../../../../models/gameDifficulty.model';
import BlueButton from '../../../../shared/controls/BlueButton';
import LimeButton from '../../../../shared/controls/LimeButton';
import RedButton from '../../../../shared/controls/RedButton';

type Props = {
  onClick(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
};

const { EASY_MODE, HARD_MODE, NORMAL_MODE } = GAME_MODES;

const DifficultyMenuView = ({ onClick }: Props) => {
  return (
    <section className="w-full max-w-[360px] m-auto mt-8">
      <h2 className="font-sans text-white text-lg mb-4">
        Choose the mode to play:
      </h2>
      <div className="flex flex-col gap-2">
        <LimeButton name={EASY_MODE} onClick={onClick}>
          🙂 Easy
        </LimeButton>
        <BlueButton name={NORMAL_MODE} onClick={onClick}>
          😎 Normal
        </BlueButton>
        <RedButton name={HARD_MODE} onClick={onClick}>
          🤪 Hard
        </RedButton>
      </div>
    </section>
  );
};

export default DifficultyMenuView;
