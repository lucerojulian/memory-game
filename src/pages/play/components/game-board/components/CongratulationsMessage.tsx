import { FC } from 'react';
import PrimaryButton from '../../../../../shared/controls/PrimaryButton';
import ConfettiExplosion from 'react-confetti-explosion';
import TrophyIcon from '../../../../../shared/icons/TrophyIcon';
import useUser from '../../../../../hooks/useUser';

interface Props {
  handleGoToMenu: () => void;
}

const CongratulationsMessage: FC<Props> = ({ handleGoToMenu }) => {
  const { name } = useUser();

  return (
    <>
      <div className="fixed z-10 w-screen h-screen flex items-center justify-center flex-col gap-4 top-0 left-0 bg-black/90">
        <TrophyIcon className="h-40 fill-yellow-400 animate-bounce" />
        <h2 className="text-center text-yellow-500 text-4xl sm:text-5xl font-sans font-bold mb-16 bg-white/10 border-y border-yellow-500 p-4 w-full">
          Congratulations {name}!
        </h2>
        <PrimaryButton
          type="button"
          onClick={handleGoToMenu}
          className="w-max h-max"
        >
          Go to menu
        </PrimaryButton>
      </div>
      <div className="fixed w-screen left-[50vw]">
        <ConfettiExplosion particleSize={10} particleCount={150} zIndex={20} />
      </div>
    </>
  );
};

export default CongratulationsMessage;
