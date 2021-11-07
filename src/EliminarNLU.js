import React from "react";
import FormName from "./FormName";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

import './styles.css'


const EliminarNLU = () => {

  return (
    <div>
      <h1>Eliminar NLU</h1>
      <FormName />

      <Box m={1} pt={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Eliminar NLU
        </Button>
      </Box>


    </div>
  );
};

export default EliminarNLU;