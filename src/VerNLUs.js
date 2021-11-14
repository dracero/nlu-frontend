import React, { useState, useEffect } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

const render = (nlus) => {
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


const VerNLUs = () => {
  const [nlus, setNlus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/nlu_structures")
      .then((response) => {
        // handle success
        setNlus(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }
    );
  }, []);

  return (render(nlus));
};





export default VerNLUs;