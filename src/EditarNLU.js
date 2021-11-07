import React from "react";
import FormNameText from "./FormNameText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import './styles.css'

const EditarNLU = () => {

  return (
    <div>
      <h1>Editar NLU</h1>
      <FormNameText />
      <Box m={1} pt={2}>
            <Button variant="contained">
            Editar
            </Button>
      </Box>
    </div>
  );
};

export default EditarNLU;
