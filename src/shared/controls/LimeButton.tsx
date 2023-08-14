import { FC } from 'react';
import Button from './button/Button';
import { ButtonProps } from './button/Button.model';

const LimeButton: FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <Button
      className="border-lime-500 bg-lime-500 !text-black hover:bg-lime-600 hover:border-lime-600"
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default LimeButton;
