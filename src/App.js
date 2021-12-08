// src/App.js

import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <About />
            <Jobs />
            <Projects />
            <Skills />
        </main>
    );
}
