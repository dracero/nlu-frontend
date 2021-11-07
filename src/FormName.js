import React from "react";
import TextField from '@mui/material/TextField';

const FormName = () => {

  return (
    <div>
      <form>
        <div class="formcontainer">
          <div class="container">
            <TextField margin="normal" id="outlined-basic" label="Nombre" variant="outlined" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormName;