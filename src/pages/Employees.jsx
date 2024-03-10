import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button, Modal, Box, Typography } from '@mui/material';
import employees from '../assets/employees.json';
import Layout from './Layout.jsx';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Employees = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleOpen = (employee) => {
        setSelectedEmployee(employee);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        ИИН
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        ФИО
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        Телефон
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        Полная информация
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
                                <TableRow key={employee.iin}>
                                    <TableCell>{employee.iin}</TableCell>
                                    <TableCell>{employee.name}</TableCell>
                                    <TableCell>{employee.phone}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleOpen(employee)}>Подробнее</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={employees.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="employee-details-title"
                    aria-describedby="employee-details-description"
                >
                    <Box sx={style}>
                        <Typography id="employee-details-title" variant="h6" component="h2">
                            Информация о сотруднике
                        </Typography>
                        <Typography id="employee-details-description" sx={{ mt: 2 }}>
                            ИИН: {selectedEmployee?.iin}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            ФИО: {selectedEmployee?.name}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Телефон: {selectedEmployee?.phone}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Email: {selectedEmployee?.email}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Адрес: {selectedEmployee?.address}
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            День рождения: {selectedEmployee?.birthday}
                        </Typography>
                        <Button onClick={handleClose} sx={{ mt: 2 }}>
                            Закрыть
                        </Button>
                    </Box>
                </Modal>
            </Paper>
        </Layout>
    );
};

export default Employees;
