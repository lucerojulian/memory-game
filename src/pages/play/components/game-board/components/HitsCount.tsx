import { FC } from 'react';
import CheckIcon from '../../../../../shared/icons/CheckIcon';

interface Props {
  hits: number;
}

const HitsCount: FC<Props> = ({ hits }) => {
  const hitsClasses = `rounded flex items-center ${
    hits > 0 ? 'jello-horizontal' : ''
  }`;

  return (
    <p key={hits} className={hitsClasses}>
      Hits:
      <CheckIcon className="h-3 fill-green-500 ml-2" />
      <span className="ml-1 text-green-500">{hits}</span>
    </p>
  );
};

export default HitsCount;
