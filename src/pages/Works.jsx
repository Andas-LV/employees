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
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel, Button
} from '@mui/material';
import tasks from '../assets/tasks.json';

const Works = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [assigneeFilter, setAssigneeFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleAssigneeFilterChange = (event) => {
        setAssigneeFilter(event.target.value);
    };

    const handleDateFilterChange = (event) => {
        setDateFilter(event.target.value);
    };

    const filteredTasks = tasks
        .filter(task => (assigneeFilter ? task.assignee === assigneeFilter : true))
        .filter(task => (dateFilter ? task.createdAt === dateFilter : true))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Layout>
            <Paper>
                <FormControl>
                    <InputLabel id="assignee-filter-label">Исполнитель</InputLabel>
                    <Select
                        labelId="assignee-filter-label"
                        value={assigneeFilter}
                        onChange={handleAssigneeFilterChange}
                    >
                        <MenuItem value="">
                            <em>Все</em>
                        </MenuItem>
                        {Array.from(new Set(tasks.map(task => task.assignee))).map(assignee => (
                            <MenuItem key={assignee} value={assignee}>{assignee}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="date-filter-label">Дата создания</InputLabel>
                    <Select
                        labelId="date-filter-label"
                        value={dateFilter}
                        onChange={handleDateFilterChange}
                    >
                        <MenuItem value="">
                            <em>Все</em>
                        </MenuItem>
                        {Array.from(new Set(tasks.map(task => task.createdAt))).map(date => (
                            <MenuItem key={date} value={date}>{date}</MenuItem>
                        ))}
                    </Select>
                    <Button>
                        Найти
                    </Button>
                </FormControl>

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
