import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import {index} from "./store";
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={index}>
            <Header/>
            <Hero/>
            <About/>
            <Footer/>
        </Provider>
    );
};

export default App;
