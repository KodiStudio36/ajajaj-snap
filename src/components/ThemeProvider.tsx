// src/components/ThemeProvider.tsx

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, Theme as MuiTheme } from "@mui/material/styles";

type ThemeContextType = {
    themeMode: "light" | "dark";
    toggleTheme: () => void;
    theme: MuiTheme; // Explicitly type the theme
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    // Custom Light Theme
    const lightTheme = createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#bb86fc",
            },
            secondary: {
                main: "#03dac6",
            },
            background: {
                default: "#f5f5f5",
                paper: "#ffffff",
            },
            text: {
                primary: "#000000",
                secondary: "#555555",
            },
        },
        typography: {
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
    });

    // Custom Dark Theme
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#bb86fc",
            },
            secondary: {
                main: "#03dac6",
            },
            background: {
                default: "#121212",
                paper: "#1d1d1d",
            },
            text: {
                primary: "#ffffff",
                secondary: "#ffffff",
            },
        },
        typography: {
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
    });

    // Select theme based on mode
    const theme = themeMode === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme, theme }}>
            <MuiThemeProvider theme={theme}>
                <div style={{ backgroundColor: theme.palette.background.default }}>
                    {children}
                </div>
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}