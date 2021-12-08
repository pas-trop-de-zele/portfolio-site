import React from "react";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Sam Le
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Personal Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samle007/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-5 hover:text-white"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/pas-trop-de-zele"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-5 hover:text-white"
                    >
                        Github
                    </a>
                </nav>
            </div>
        </header>
    );
}
