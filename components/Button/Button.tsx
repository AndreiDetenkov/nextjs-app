import React, {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode,} from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

export enum AppearanceType {
  primary = 'primary',
  outline = 'outline',
}

export enum ArrowType {
  right = 'right',
  down = 'down',
  none = 'none',
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: AppearanceType.primary | AppearanceType.outline;
  arrow?: ArrowType.right | ArrowType.down | ArrowType.none;
}

export const Button = ({appearance, children, arrow = ArrowType.none, className, ...props}: ButtonProps): JSX.Element => {
  return (
      <button
          className={cn(styles.button, className, {
            [styles.primary]: appearance === AppearanceType.primary,
            [styles.outline]: appearance === AppearanceType.outline,
          })}
          {...props}
      >
        {children}
        {arrow !== ArrowType.none && <span className={cn(styles.arrow, {
          [styles.down]: arrow === ArrowType.down,
        })}>
          <ArrowIcon />
        </span>}
      </button>
  );
};
