import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
      <>
        <Header />
        <main>
          <Sidebar />
          <div>
            {children}
          </div>
        </main>
        <Footer />
      </>
  );
};
