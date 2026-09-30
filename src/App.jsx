import { useState } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}

export default App;
