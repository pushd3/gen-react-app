import React from "react";
import "./App.css";
import Routes from './components/routes'
import Footer from "./components/footer.component";
import About from "./components/about.component";
import Home from "./components/home.component";
import Contact from "./components/contactus.component";
function App() {
  return (
    <div className="App">
      <Routes />

      <Footer />
    </div>
  );
}

export default App;
