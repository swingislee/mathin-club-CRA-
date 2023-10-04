import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './features/Home/index.js';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import StoryPage from './features/Story/StoryIndex';
import GamesPage from './features/Games/GamesIndex';
import TermsPage from './features/Terms/TermsIndex';
import MindsPage from './features/Minds/MindsIndex';
import ToolsPage from './features/Tools/ToolsIndex';

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="navbar-container"><Navbar /></div>            
                <AnimatePresence>
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/story" element={<StoryPage />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/minds" element={<MindsPage />} />
                    <Route path="/tools" element={<ToolsPage />} />
                        </Routes>
            </div>
                </AnimatePresence>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
            
        </Router>
    );
}

export default App;
