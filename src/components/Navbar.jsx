// import React from 'react';
// import Routing from './Router.jsx';
// import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
//
// const Navbar = () => {
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//                     <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                     Название компании
//                 </Typography>
//                 <Routing/>
//             </Toolbar>
//         </AppBar>
//     );
// };
//
// export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Employees from './Employees.jsx'; // Путь к вашему компоненту Employees
import employees from '../assets/employees.json';


const Navbar = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/Employees" component={Employees}/>
            </Routes>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">
                        <Link to="/employees">
                            Сотрудники
                        </Link>
                    </Button>
                    {/*<Button color="inherit" component={Link} to="/calendar">Календарь</Button>*/}
                    {/*<Button color="inherit" component={Link} to="/work-list">Список работ</Button>*/}
                    {/*<Button color="inherit" component={Link} to="/login">Вход</Button>*/}
                </Toolbar>
            </AppBar>
        </Router>
    );
};

export default Navbar;

