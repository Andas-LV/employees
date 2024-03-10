import React, { useState } from 'react';
import Layout from './Layout.jsx';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    Typography
} from '@mui/material';
import tasks from '../assets/tasks.json';

const Works = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Layout>
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="список работ">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        Задача
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        Исполнитель
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        Создан
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h5" component="h2">
                                        Статус
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.name}</TableCell>
                                    <TableCell>{task.assignee}</TableCell>
                                    <TableCell>{task.createdAt}</TableCell>
                                    <TableCell>{task.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30]}
                    component="div"
                    count={tasks.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Layout>
    );
}

export default Works;
