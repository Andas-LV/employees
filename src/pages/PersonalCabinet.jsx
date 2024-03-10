import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthContext.jsx';

const PersonalCabinet = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Пожалуйста, войдите в систему.</div>;
    }

    return (
        <div>
            <h1>Личный кабинет</h1>
            <p>Добро пожаловать, {user.name}!</p>
        </div>
    );
};

export default PersonalCabinet;
