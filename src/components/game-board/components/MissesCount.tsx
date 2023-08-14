import { FC } from 'react';
import CloseIcon from '../../../shared/icons/CloseIcon';

interface Props {
  misses: number;
}

const MissesCount: FC<Props> = ({ misses }) => {
  const missesClasses = `sm:text-xl rounded flex items-center ${
    misses > 0 ? 'shake-horizontal' : ''
  }`;

  return (
    <p key={misses} className={missesClasses}>
      Misses:
      <CloseIcon className="h-3 ml-2 fill-red-500" />
      <span className="ml-1 text-red-500">{misses}</span>
    </p>
  );
};

export default MissesCount;
