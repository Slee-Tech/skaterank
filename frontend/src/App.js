import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SkaterankContextProvider from "./SkaterankContext";
import NavbarWrapper from "./components/Navbar";
import SkaterList from "./components/SkaterList";
import Filters from "./components/Filters";

// wrap only the components that need the state with the appropriate context provider
function App() {
    return (
        <div className="container">
            <SkaterankContextProvider>
                <NavbarWrapper />
                <Filters />
                <SkaterList />
            </SkaterankContextProvider>
        </div>
    );
}

export default App;
