import React from "react";
import FormNameText from "./FormNameText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import './styles.css'

const AgregarNLU = () => {

  return (
    <div>
        <h1>Agregar NLU</h1>
        <FormNameText />

        <Box m={1} pt={2}>
            <Button variant="contained">
            Agregar
            </Button>
        </Box>
    </div>
  );
};

export default AgregarNLU;
