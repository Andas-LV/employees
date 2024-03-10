// Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginForm from './Login.jsx';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box>
                        <Button color="inherit" component={Link} to="/Employees">Сотрудники</Button>
                        <Button color="inherit" component={Link} to="/Calendar">Календарь</Button>
                        <Button color="inherit" component={Link} to="/Works">Список работ</Button>
                    </Box>

                    <Box>
                        <Button color="inherit" onClick={handleOpen}>Вход</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <LoginForm open={open} handleClose={handleClose} />
        </>
    );
};

export default Navbar;
