import React, { useState } from "react";
import FormID from "./FormID";
import Alert from "@mui/material/Alert";
import axios from "axios";
import url from "./index.js";
import "./styles.css";

let errorMessage = '';

const EliminarNLU = () => {

  const [deleteNluId, setDeleteNluId] = useState("");
  const [state, setState] = useState('');

  const deleteNLU = (event) => {
    
    event.preventDefault()
  
    axios
      .delete(url + "nlu_structure/" + deleteNluId)
      .then(returnedNLU => {
        //console.log("Se eliminó con éxito el nlu: " + returnedNLU.data.name);
        setState('Success');
        setDeleteNluId("");
        event.target.reset();
      })
      .catch(error => {
        errorMessage = error;
        setState('Error');
        console.log(error);
        event.target.reset();
      })
  }

  const handleNluChangeID = (event) => {
    setDeleteNluId(event.target.value)
  }

  return (
    
    <div>
      <h1>Eliminar NLU</h1>
      <FormID onSubmit={deleteNLU} 
              handleNluChangeID={handleNluChangeID} />
      
      {(state === 'Success') &&
        <div>
          <Alert variant="outlined" severity="success">
            NLU eliminado exitosamente.
          </Alert>
        </div>
      }

      {(state === 'Error') &&
        <div>
          <Alert variant="outlined" severity="error">
            Error: ID no encontrado.
          </Alert>
        </div>
      }
    </div>
  );
};

export default EliminarNLU;
