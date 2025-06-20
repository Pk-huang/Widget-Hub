// import React from "react";
import React, { useState } from "react";
import  { useTheme } from "../contexts/ThemeContext.tsx";
import'../style/ThemeToggle.css';



const ToggleThemeUI = () => {
    const { theme, toggleTheme } = useTheme();
    const [isSpinning, setIsSpinning] = useState(false);
    const nextTheme = theme === "light" ? "dark" : "light";

    const handleClick = () => {
        setIsSpinning(true); // 啟動動畫
        setTimeout(() => setIsSpinning(false), 500); // 過一段時間移除
        toggleTheme();
    };

    return (
        <button
            className="btn btn-secondary"
            onClick={handleClick}
            title={`Switch to ${nextTheme}`}
        >
            {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    )
}

export default ToggleThemeUI

