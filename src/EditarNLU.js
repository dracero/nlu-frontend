import React, { useState } from "react";
import FormNameTextID from "./FormNameTextID";
import axios from "axios";

import './styles.css'

const EditarNLU = () => {
  const [updateNlu, setUpdateNlu] = useState({id:''});

  const updateNLU = (event) => {
    event.preventDefault()
  
    axios.put("http://localhost:3000/nlu_structure", null, { params: updateNlu})
        .then(returnedNLU => {
          console.log("Se actualizó con exito el nlu: " + updateNlu.id);
          setUpdateNlu({id:''})
        })
        .catch(error => {
          console.log(error);
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
    </div>
  );
};

export default EditarNLU;
