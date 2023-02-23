import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from "classnames";
import styles from "./Paragraph.module.css";
export enum Size {
  small = 's',
  medium = 'm',
  large = 'l',
}

interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: React.ReactNode;
  size?: Size.small | Size.medium | Size.large;
}
export const Paragraph = ({children, size, className, ...props}: ParagraphProps): JSX.Element => {
  return (
    <p className={cn(styles.default, className, {
      [styles.small]: size === Size.small,
      [styles.large]: size === Size.large,
    })} {...props}>
      {children}
    </p>
  );
};
