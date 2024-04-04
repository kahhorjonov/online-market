import { Fragment } from "react";
import Header from "../modules/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <div className="footer"></div>
    </Fragment>
  );
};

export default Layout;
