import React, { useState } from "react";
import FormID from "./FormID";
import axios from "axios";

import './styles.css'


const EliminarNLU = () => {
  const [deleteNluId, setDeleteNluId] = useState("");

  const deleteNLU = (event) => {
    event.preventDefault()
  
    axios.delete("http://localhost:3000/nlu_structure/" + deleteNluId)
        .then(returnedNLU => {
          console.log("Se eliminó con exito el nlu: " + returnedNLU.data.name);
          setDeleteNluId("")
        })
        .catch(error => {
          console.log(error);
        })
  }

  const handleNluChangeID = (event) => {
    setDeleteNluId(event.target.value)
  }

  return (
    <div>
      <h1>Eliminar NLU</h1>
      <FormID onSubmit={deleteNLU} handleNluChangeID={handleNluChangeID} />
    </div>
  );
};

export default EliminarNLU;