import React from "react";
import Home from "./Home";
import Layout from "./components/layout";
import "./assets/css/style.css";

function App() {
  return (
    <div className="main__app">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
