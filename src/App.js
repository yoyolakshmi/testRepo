import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Source from "./dataSource.json";
import Header from "./common/Header";
import Home from "./container/Home";
import Profile from "./container/Profile";
import Detail from "./container/Detail";

export const DataContext = React.createContext();

const dataSource = Source;

function App() {
  return (
    <DataContext.Provider value={dataSource}>
      <Router>
        <Header />
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/detail/:id" exact component={Detail} />
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
