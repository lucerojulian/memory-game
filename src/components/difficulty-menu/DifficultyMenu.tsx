import { FC } from 'react';
import DifficultyMenuView from './DifficultyMenuView';
import { GameModeKey } from '../../models/gameDifficulty.model';

interface Props {
  onChooseDifficulty: (mode: GameModeKey) => void;
}

const DifficultyMenu: FC<Props> = ({ onChooseDifficulty }) => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onChooseDifficulty(event.currentTarget.name as GameModeKey);
  };

  return <DifficultyMenuView onClick={handleOnClick} />;
};

export default DifficultyMenu;
