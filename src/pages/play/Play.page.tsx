import { Navigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { Suspense, lazy, useState } from 'react';
import DifficultyMenu from './components/difficulty-menu/DifficultyMenu';
import { GAME_MODES, GameModeKey } from '../../models/gameDifficulty.model';
import Spinner from '../../shared/display/Spinner';

const LazyGameBoard = lazy(() => import('./components/game-board/GameBoard'));

const { EASY_MODE } = GAME_MODES;

export const PlayPage = () => {
  const [showBoard, setShowBoard] = useState<boolean>(false);
  const [showDifficultyMenu, setShowDifficultyMenu] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<GameModeKey>(EASY_MODE);

  const { name } = useUser();

  const startGame = (mode: GameModeKey) => {
    setDifficulty(mode);
    setShowBoard(true);
    setShowDifficultyMenu(false);
  };

  if (!name) {
    return <Navigate to="/" />;
  }

  const handleBackToMenu = () => {
    setShowBoard(false);
    setShowDifficultyMenu(true);
  };

  return (
    <>
      {showDifficultyMenu && <DifficultyMenu onChooseDifficulty={startGame} />}
      {showBoard && (
        <Suspense fallback={<Spinner />}>
          <LazyGameBoard
            difficulty={difficulty}
            handleBackToMenu={handleBackToMenu}
          />
        </Suspense>
      )}
    </>
  );
};

export default PlayPage;
