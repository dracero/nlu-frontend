import React, { useState } from "react";
import FormNameTextID from "./FormNameTextID";
import Alert from "@mui/material/Alert";
import axios from "axios";
import url from "./index.js";
import "./styles.css";

const EditarNLU = () => {
  const [updateNlu, setUpdateNlu] = useState({id:''});
  const [state, setState] = useState('');

  const updateNLU = (event) => {
    
    event.preventDefault()
  
    axios
      .put(url + "nlu_structure", null, { params: updateNlu})
      .then(returnedNLU => {
        setUpdateNlu({id:''});
        setState('Success');
      })
      .catch(error => {
        console.log(error);
        setState('Error');
      })
  }

  const handleNluChangeName = (event) => {
    let updateNluObject = {
      ...updateNlu,
      name: event.target.value
    }
    setUpdateNlu(updateNluObject)
  }
  
  const handleNluChangeText = (event) => {
    let updateNluObject = {
      ...updateNlu,
      text: event.target.value
    }
    setUpdateNlu(updateNluObject)
  }

  const handleNluChangeID = (event) => {
    let updateNluObject = {
      ...updateNlu,
      id: event.target.value
    }
    setUpdateNlu(updateNluObject)
  }

  return (
    <div>
      <h1>Editar NLU</h1>

      <FormNameTextID onSubmit={updateNLU} 
                        handleNluChangeID={handleNluChangeID}
                        handleNluChangeName={handleNluChangeName} 
                        handleNluChangeText={handleNluChangeText} 
                        buttonName="Editar" />
      
      {(state === 'Success') && 
        <div>
          <Alert variant="outlined" severity="success">
            NLU modificado exitosamente.
          </Alert>
        </div>
      }

      {(state === 'Error') &&
        <div>
          <Alert variant="outlined" severity="error">
            Error: Nlu inexistente.
          </Alert>
        </div>
      }

    </div>
  );
};

export default EditarNLU;
