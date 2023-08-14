import { FC } from 'react';
import Button from './button/Button';
import { ButtonProps } from './button/Button.model';

const RedButton: FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <Button
      className="border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600"
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default RedButton;
