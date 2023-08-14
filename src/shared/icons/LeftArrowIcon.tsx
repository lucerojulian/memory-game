import { FC } from 'react';

interface Props {
  className?: string;
}

const LeftArrowIcon: FC<Props> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 346 511.48"
    >
      <path
        fillRule="nonzero"
        d="M346 101.8 201.49 255.74 346 409.68l-105.94 101.8L0 255.74 240.06 0z"
      />
    </svg>
  );
};

export default LeftArrowIcon;
