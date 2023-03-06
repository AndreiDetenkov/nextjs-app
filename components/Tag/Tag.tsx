import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from "classnames";
import styles from "../Tag/Tag.module.css";

export enum TagSize {
  small = 's',
  medium = 'm',
}

export enum TagColor {
  ghost = 'ghost',
  red = 'red',
  grey = 'grey',
  green = 'green',
  primary = 'primary',
}

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: React.ReactNode;
  size?: TagSize.small | TagSize.medium ;
  color?: TagColor.ghost | TagColor.red | TagColor.primary | TagColor.grey | TagColor.green;
  href?: string
}

export const Tag = ({size = TagSize.small, children, color = TagColor.ghost, href, className, ...props}: TagProps): JSX.Element => {
  return (
      <div className={cn(styles.tag, className, {
        [styles.small]: size === TagSize.small,
        [styles.medium]: size === TagSize.medium,
        [styles.ghost]: color === TagColor.ghost,
        [styles.red]: color === TagColor.red,
        [styles.grey]: color === TagColor.grey,
        [styles.green]: color === TagColor.green,
        [styles.primary]: color === TagColor.primary,
      })} {...props}>
        {
          href ? <a href={href}>{children}</a> : <>{children}</>
        }
      </div>
  );
};


