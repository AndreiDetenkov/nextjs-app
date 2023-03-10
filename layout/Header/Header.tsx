import {DetailedHTMLProps, HTMLAttributes} from "react";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ }

export const Header = ({...props}: HeaderProps): JSX.Element => {
  return (
      <div {...props}>
        Header
      </div>
  );
};
