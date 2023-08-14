import { Navigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { Suspense, lazy, useState } from 'react';
import DifficultyMenu from '../components/DifficultyMenu';
import { DIFFICULTY } from '../constants/gameDifficulty';
import Spinner from '../shared/display/Spinner';

const LazyGameBoard = lazy(() => import('../components/game-board/GameBoard'));

const PlayGamePage = () => {
  const [showBoard, setShowBoard] = useState<boolean>(false);
  const [showDifficultyMenu, setShowDifficultyMenu] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<keyof typeof DIFFICULTY>(
    DIFFICULTY.EASY_MODE,
  );

  const { name } = useUser();

  const startGame = (mode: keyof typeof DIFFICULTY) => {
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

export default PlayGamePage;
