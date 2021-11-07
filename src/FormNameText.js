import React from "react";
import TextField from '@mui/material/TextField';

const FormNameText = () => {

  return (
    <div>
      <form>
        <div class="formcontainer">
          <div class="container">
            <TextField margin="normal" id="outlined-basic" label="Nombre" variant="outlined" />
            <br/>
            <TextField margin="normal" id="outlined-basic" label="Texto" variant="outlined" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormNameText;
