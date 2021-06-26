import React from "react";
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";

class App extends React.Component {
  render() {
      return (
        <div class="App">
          <h1>Curryous</h1>
          <SearchBar />
          <BusinessList /> 
        </div>    
  );
  }
}

export default App;
