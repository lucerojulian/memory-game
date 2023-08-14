import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

const PuffyText: FC<Props> = ({ children, className }) => {
  return (
    <span
      className={"font-['Puffy'] italic text-2xl text-amber-500 " + className}
    >
      {children}
    </span>
  );
};

export default PuffyText;
