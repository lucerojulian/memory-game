import { FC } from 'react';
import { ButtonProps } from './Button.model';

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  className,
  ...restProps
}) => {
  const buttonClasses =
    'w-full h-full px-2 py-2 font-sans font-bold border-2 rounded text-black flex items-center justify-center';

  return (
    <button
      type={type}
      className={`${buttonClasses} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
