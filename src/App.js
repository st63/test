import React from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";

function App() {
  console.count("render app");
  return (
    <SearchForm />
  );
};

export default App;