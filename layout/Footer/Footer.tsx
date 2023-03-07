import {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from "classnames";
import {format} from "date-fns";
import styles from './Footer.module.css';
interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return (
      <footer className={cn(className, styles.footer)} {...props}>
        <div>
          TopApp @ 2020 - {format(new Date(), 'yyyy')} Все права защищены
        </div>
        <a href="#" target="_blank" rel="noreferrer noopener">Пользовательское соглашение</a>
        <a href="#" target="_blank" rel="noreferrer noopener">Политика конфиденциальности</a>
      </footer>
  );
};
