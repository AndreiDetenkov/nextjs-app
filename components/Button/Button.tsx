import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export enum AppearanceType {
  primary = 'primary',
  outline = 'outline',
}

interface ButtonProps {
  children: ReactNode;
  appearance: AppearanceType.primary | AppearanceType.outline;
}

export const Button = ({
  appearance = AppearanceType.primary,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === AppearanceType.primary,
        [styles.outline]: appearance === AppearanceType.outline,
      })}
    >
      {children}
    </button>
  );
};
