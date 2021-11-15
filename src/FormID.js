import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

const FormID = ({onSubmit, handleNluChangeID}) => {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="formcontainer">
          <div className="container">
            <TextField margin="normal" id="outlined-basic" label="ID" variant="outlined" onChange={handleNluChangeID} />
          </div>
        </div>

        <Box m={1} pt={2}>
          <Button variant="outlined" startIcon={<DeleteIcon />} type="submit">
            Eliminar NLU
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default FormID;