import { FC } from 'react';
import PrimaryButton from '../../../shared/controls/PrimaryButton';
import ConfettiExplosion from 'react-confetti-explosion';
import TrophyIcon from '../../../shared/icons/TrophyIcon';

interface Props {
  handleGoToMenu: () => void;
}

const CongratulationsMessage: FC<Props> = ({ handleGoToMenu }) => {
  return (
    <>
      <div className="fixed z-10 w-screen h-screen flex items-center justify-center flex-col gap-4 bg-black/80 top-0 left-0">
        <TrophyIcon className="h-40 fill-yellow-400 animate-bounce" />
        <h2 className="text-center font-sans font-bold mb-16">
          <span className="text-5xl text-purple-500 ">C</span>
          <span className="text-5xl text-green-500 ">o</span>
          <span className="text-5xl text-cyan-500 ">n</span>
          <span className="text-5xl text-yellow-500 ">g</span>
          <span className="text-5xl text-red-500 ">r</span>
          <span className="text-5xl text-teal-500 ">a</span>
          <span className="text-5xl text-violet-500 ">t</span>
          <span className="text-5xl text-lime-500 ">s</span>
          <span className="text-5xl text-fuchsia-500 ">!</span>
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
