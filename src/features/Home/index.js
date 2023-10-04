\src\features\Home\index.js

import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Welcome to My Website</h1>
            <img src="\public\images\MainBackground.png" alt="Main Image" />
            {/* You can add other elements here as per your requirement */}
        </motion.div>
    );
};

export default HomePage;
