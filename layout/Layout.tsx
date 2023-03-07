import React, {DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactNode} from "react";
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Header/>
      <main>
        <Sidebar/>
        <div>
          {children}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
