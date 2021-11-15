import React, { useState } from "react";
import FormNameText from "./FormNameText";
import axios from "axios";

import './styles.css'

const AgregarNLU = () => {
  const [newNlu, setNewNlu] = useState({});

  const addNLU = (event) => {
    event.preventDefault()
  
    axios.post("http://localhost:3000/nlu_structure", null, { params: newNlu})
        .then(returnedNLU => {
          console.log("Se agregó con exito el nlu: " + returnedNLU.data.name);
          setNewNlu({})
        })
        .catch(error => {
          console.log(error);
        })
  }

  const handleNluChangeName = (event) => {
    let newNluObject = {
      ...newNlu,
      name: event.target.value
    }
    setNewNlu(newNluObject)
  }
  
  const handleNluChangeText = (event) => {
    let newNluObject = {
      ...newNlu,
      text: event.target.value
    }
    setNewNlu(newNluObject)
  }

  return (
    <div>
        <h1>Agregar NLU</h1>

        <div>
          <FormNameText onSubmit={addNLU} 
                        handleNluChangeName={handleNluChangeName} 
                        handleNluChangeText={handleNluChangeText} 
                        buttonName="Agregar" />
        </div>
    </div>
  );
};

export default AgregarNLU;
