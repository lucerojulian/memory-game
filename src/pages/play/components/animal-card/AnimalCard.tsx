import { FC } from 'react';
import { GameAnimal } from '../game-board/models/gameAnimal.model';
import './animalCard.scss';
import { GameModeKey } from '../../../../models/gameDifficulty.model';

interface Props {
  animal: GameAnimal;
  isFlipped: boolean;
  onClick: (animal: GameAnimal) => void;
  difficulty: GameModeKey;
}

const AnimalCard: FC<Props> = (props) => {
  const { animal, isFlipped, difficulty, onClick } = props;
  const { name, image } = animal;

  const cardClasses = 'animalCard' + (isFlipped ? ' animalCard--flipped' : '');
  const backClasses = `animalCard__back animalCard__back--${difficulty}`;

  return (
    <button
      type="button"
      onClick={() => {
        onClick(animal);
      }}
      disabled={isFlipped}
      className={cardClasses}
    >
      <img
        src={image}
        alt={name}
        className="object-cover h-full w-full animalCard__front"
        draggable={false}
      />
      <div className={backClasses} title="Click to flip the card">
        ?
      </div>
    </button>
  );
};

export default AnimalCard;
