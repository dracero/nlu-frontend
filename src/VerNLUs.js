import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const VerNLUs = () => {
  const nlus = [
    {
      name: 'Entity 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }, 
    {
      name: 'Rol 1',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, 
    {
      name: 'Entity 2',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    }, 
    {
      name: 'Intent 1',
      text: 'Nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Trail 2',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ]

  return (
    <div>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell align="left"><strong>Texto</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nlus.map((nlu) => (
            <TableRow
              key={nlu.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {nlu.name}
              </TableCell>
              <TableCell align="left">{nlu.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  );
};

export default VerNLUs;