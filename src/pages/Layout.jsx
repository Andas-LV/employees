import React from 'react';
import Navbar from '../components/Navbar.jsx';

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;
