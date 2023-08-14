import { FC, useEffect, useMemo, useState } from 'react';
import AnimalCard from '../animal-card/AnimalCard';
import { GameAnimal } from '../../models/gameAnimal';
import { useFetch } from '../../hooks/useFetch';
import { AnimalsResponse } from '../../models/apiAnimal';
import { apiAnimalsToGameAnimals } from '../../adapters/apiAnimalsToGameAnimals';
import { shuffleArray } from '../../utils/shuffleArray';
import { DIFFICULTY } from '../../constants/gameDifficulty';
import LeftArrowIcon from '../../shared/icons/LeftArrowIcon';
import HitsCount from './components/HitsCount';
import MissesCount from './components/MissesCount';
import Countdown from '../../shared/display/countdown/Countdown';
import CongratulationsMessage from './components/CongratulationsMessage';
import {
  ANIMALS_BY_DIFFICULTY,
  GAMEBOARD_GRID_BY_DIFFICULTY,
} from './models/gameBoard.model';

const COPY_UUID_SUFFIX = '-copy';

interface Props {
  difficulty: keyof typeof DIFFICULTY;
  handleBackToMenu: () => void;
}

const GameBoard: FC<Props> = ({ difficulty, handleBackToMenu }) => {
  const [win, setWin] = useState<boolean>(false);
  const [hits, setHits] = useState<number>(0);
  const [misses, setMisses] = useState<number>(0);
  const [allVisible, setAllVisible] = useState<boolean>(true);

  const [currentFlipped, setCurrentFlipped] = useState<string[]>([]);
  const [flippledCards, setFlippledCards] = useState<string[]>([]);

  const API_URL =
    'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=' +
    ANIMALS_BY_DIFFICULTY[difficulty];

  const { data, loading } = useFetch<AnimalsResponse>(API_URL);

  const onWin = () => {
    setWin(true);
  };

  const memoizedShuffledAnimals = useMemo(() => {
    const animals = apiAnimalsToGameAnimals(data?.entries || []);
    const animalsWithCopies = animals
      .map((animal) => ({
        ...animal,
        uuid: animal.uuid + COPY_UUID_SUFFIX,
      }))
      .concat(animals);

    return shuffleArray(animalsWithCopies);
  }, [data]);

  const removeSuffixFromUuid = (uuid: string) => {
    return uuid.replace(COPY_UUID_SUFFIX, '');
  };

  const validateFlippedCards = (animal: GameAnimal) => {
    const { uuid, name } = animal;

    if (
      currentFlipped.length &&
      removeSuffixFromUuid(currentFlipped[0]) === removeSuffixFromUuid(uuid)
    ) {
      setHits((prevHits) => prevHits + 1);
      setFlippledCards((prevFlippledCards) => [...prevFlippledCards, name]);
      setCurrentFlipped([]);
      if (flippledCards.length + 1 === memoizedShuffledAnimals.length / 2) {
        console.log('ganaste');
        onWin();
      }
    } else if (
      currentFlipped.length &&
      removeSuffixFromUuid(currentFlipped[0]) !== removeSuffixFromUuid(uuid)
    ) {
      setTimeout(() => {
        setMisses((prevMisses) => prevMisses + 1);
        setCurrentFlipped([]);
      }, 1000);
    }
  };

  const handleOnClickCard = (animal: GameAnimal) => {
    const { uuid } = animal;

    setCurrentFlipped((prevCurrentFlipped) => [...prevCurrentFlipped, uuid]);
    validateFlippedCards(animal);
  };

  const isFlipped = (animal: GameAnimal) => {
    return (
      allVisible ||
      flippledCards.includes(animal.name) ||
      currentFlipped.includes(animal.uuid)
    );
  };

  const gridClasses = `relative h-full w-full grid gap-2 ${GAMEBOARD_GRID_BY_DIFFICULTY[difficulty]}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {win && <CongratulationsMessage handleGoToMenu={handleBackToMenu} />}
      <button
        type="button"
        className="absolute flex items-center text-white font-sans top-2 left-4 underline p-2"
        title="Back to difficulty menu"
        onClick={handleBackToMenu}
      >
        <LeftArrowIcon className="h-3 mr-2 fill-white" />
        Back to menu
      </button>
      <div className="flex flex-row justify-between mb-4 text-white font-semibold">
        <HitsCount hits={hits} />
        <MissesCount misses={misses} />
      </div>
      <div className={gridClasses}>
        <Countdown />
        {!loading &&
          memoizedShuffledAnimals.map((animal) => (
            <AnimalCard
              animal={animal}
              key={animal.uuid}
              isFlipped={isFlipped(animal)}
              onClick={handleOnClickCard}
              difficulty={difficulty}
            />
          ))}
      </div>
    </>
  );
};

export default GameBoard;