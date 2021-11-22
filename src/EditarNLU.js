import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./app/actions/EditorActions";
import FormNameTextID from "./FormNameTextID";
import Alert from "@mui/material/Alert";
import axios from "axios";
import url from "./index.js";
import "./styles.css";

const EditarNLU = () => {
  const [state, setState] = useState('');
  const [foundNlu, setFoundNlu] = useState(false);
  const dispatch = useDispatch();
  const id = useSelector((store) => store.editor.id);
  const name = useSelector((store) => store.editor.name);
  const text = useSelector((store) => store.editor.text);

  const searchNLU = (event) => {
    
    event.preventDefault()
  
    axios
      .get(url + "nlu_structures_name?name="+ name)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatch(actions.data(response.data));

        // Deshabilitar botón de busqueda
        setFoundNlu(true)
        // Habilitar input de texto
        // Que input de texto muestre text
      })
      .catch(function (error) {
        console.log(error);
      }
    );
  }

  const updateNLU = (event) => {
    
    event.preventDefault()
  
    axios
      .put(url + "nlu_structure", null, { id: id, name: name, text: text})
      .then(returnedNLU => {
        setState('Success');
        console.log("id: ", id);
        console.log("name: ", name);
        console.log("text: ", text);
        event.target.reset();
      })
      .catch(error => {
        errorMessage = error.response.data.name;
        setState('Error');
        console.log(errorMessage);
        event.target.reset();
        console.log("id: ", id);
        console.log("name: ", name);
        console.log("text: ", text);
      })
  }

  const handleNluChangeName = (event) => {
    dispatch(actions.name(event.target.value));
  }
  
  const handleNluChangeText = (event) => {
    dispatch(actions.text(event.target.value));
    console.log("id: ", id);
    console.log("name: ", name);
    console.log("text: ", text);
  }

  return (
    <div>
      <h1>Editar NLU</h1>

      {foundNlu === true ? 
        <div>
          <p>Nombre: {name}</p>
          <p>Texto: {text}</p>
        </div> :
        null}

      <FormNameTextID onSubmit={updateNLU} 
                        onSearch={searchNLU}
                        handleNluChangeName={handleNluChangeName} 
                        handleNluChangeText={handleNluChangeText} 
                        buttonName="Editar"
                        foundNlu={foundNlu} />
      
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
