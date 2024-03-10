// LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const LoginForm = ({ open, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Вход</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        margin="dense"
                        label="ИИН"
                        fullWidth
                        variant="outlined"
                        {...register('iin', { required: 'Это поле обязательно' })}
                        error={!!errors.iin}
                        helperText={errors.iin?.message}
                    />
                    <TextField
                        margin="dense"
                        label="Пароль"
                        type="password"
                        fullWidth
                        variant="outlined"
                        {...register('password', { required: 'Это поле обязательно' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Войти
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginForm;
