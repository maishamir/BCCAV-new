import React from "react";
import Header from "../Header/Header";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
