//src/shared/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SettingsDrawer from '../features/SettingsDrawer';

function getNavbarClasses(isHomePage, isChinese) {
    let baseClass = 'navbar';
    let titleClass = 'title';
    let menuClass = 'main-menu';
    let setMenuClass = 'set-menu';

    // Home Page Condition
    if (isHomePage) {
        baseClass += ' home';
        titleClass += ' home';
        menuClass += ' home';
        setMenuClass += ' home';
    } else {
        baseClass += ' notHome';
        titleClass += ' notHome';
        menuClass += ' notHome';
        setMenuClass += ' notHome';
    }

    // Language Condition
    if (isChinese) {
        baseClass += ' zh-navbar';
        titleClass += ' zh-title';
        menuClass += ' zh-menu';
    }

    return {
        baseClass,
        titleClass,
        menuClass,
        setMenuClass
    };
}


const Navbar = () => {
    const location = useLocation();
    const { i18n } = useTranslation();
    const isChinese = i18n.language === 'zh';
    const isHomePage = location.pathname === '/';
    const { t } = useTranslation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const classes = getNavbarClasses(isHomePage, isChinese);

    return (
        
        <nav className={classes.baseClass}>
            <div className={classes.titleClass}>
                {isHomePage ? (
                    <span>{t('title')}</span>
                ) : (
                        <Link to="/">{t('home')}</Link>
                )}
            </div>

            <div className={classes.menuClass}>
                <Link to="/story">{t('story')}</Link>
                <Link to="/games">{t('games')}</Link>
                <Link to="/terms">{t('terms')}</Link>
                <Link to="/minds">{t('minds')}</Link>
                <Link to="/tools">{t('tools')}</Link>
            </div>

            <div className={classes.setMenuClass}>
                <Link to="/signin">{t('signin')}</Link>
                <Link to="/signup">{t('signup')}</Link>
                <button onClick={() => setIsDrawerOpen(true)}>{t('settings')}</button>
                <SettingsDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            </div>
            </nav>
       
    );
}

export default Navbar;
