import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';

export default function SettingsDrawer({ open, onClose }) {
    const { t, i18n } = useTranslation();

    // Initialize from LocalStorage or default to English
    const [isEnglish, setIsEnglish] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang ? savedLang === 'en' : i18n.language === 'en';
    });

    const handleToggle = () => {
        const newLang = isEnglish ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
        setIsEnglish(!isEnglish);
        localStorage.setItem('language', newLang); // Save to LocalStorage
    };

    // This effect is optional but can be used to ensure the UI and LocalStorage are in sync
    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang);
            setIsEnglish(savedLang === 'en');
        }
    }, []);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <List>
                <ListItem button>
                    <ListItemText primary={t('language')} />
                    <Switch
                        checked={isEnglish}
                        onChange={handleToggle}
                        name="languageSwitch"
                        inputProps={{ 'aria-label': 'Language toggle' }}
                    />
                </ListItem>
                {/* Add other settings as ListItems here */}
            </List>
        </Drawer>
    );
}
