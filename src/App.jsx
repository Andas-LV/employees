import React from 'react';
import "@emotion/react";
import "@emotion/styled";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar.jsx';
const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
        </ThemeProvider>
    );
}

export default App;
