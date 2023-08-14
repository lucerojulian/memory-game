import { FC } from 'react';
import Button from './button/Button';
import { ButtonProps } from './button/Button.model';

const BlueButton: FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <Button
      className="border-sky-500 bg-sky-500 hover:bg-sky-600 hover:border-sky-600"
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
