import { FC } from 'react';
import Button from './button/Button';
import { ButtonProps } from './button/Button.model';

const PrimaryButton: FC<ButtonProps> = ({
  children,
  className = '',
  ...restProps
}) => {
  return (
    <Button
      className={
        '!text-white border-violet-700 bg-violet-700 hover:bg-violet-800 hover:border-violet-800 ' +
        className
      }
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
