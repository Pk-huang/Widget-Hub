import React, { useState, useEffect, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';


interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
    children?: React.ReactNode;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeContextProps) => {

    const [ theme , setTheme ] = useState('light' as Theme);


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme == 'light' || savedTheme === 'dark') {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    } , [theme]);


    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, children }}>
            <div className={`theme-${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};