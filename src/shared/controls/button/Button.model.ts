import { PropsWithChildren } from 'react';

export interface ButtonProps
  extends PropsWithChildren,
    React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
}
