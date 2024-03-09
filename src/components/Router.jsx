import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Employees from './Employees'; // Путь к вашему компоненту Employees


const Navbar = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/employees">Сотрудники</Button>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route exact path="/employees" component={Employees} />
            </Routes>
        </Router>
    );
};

export default Navbar;
