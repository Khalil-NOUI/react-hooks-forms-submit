import React, { useState } from "react";

function Form(props) {

  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitData, setSubmitData] =useState([])
  const [error, setError] = useState([])


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    console.log(event.target.value)
  }


  function handleSubmit(event) {

    event.preventDefault();

    if(firstName.length > 1 && lastName.length > 1 ) {
    const dataForm = { firstName:firstName, lastName:lastName,};
    const dataArray = [...submitData, dataForm,]
    // props.sendFormDataSomewhere(dataForm)
    setSubmitData(dataArray)
    setFirstName("")
    setLastName("")
  }

  else {
    setError(["Input Length is insuffissant"])
  }

  }

  const submittedList = submitData.map((data, index) => {
    return(
      <div key={index} style={{textAlign:"center", fontSize:"18px", color:"chocolate",margin:"1px", padding:"1px", border:"dashed black"}}>
        <em>firstName:</em> {data.firstName} <br></br>
        <em>lastName:</em> {data.lastName}
      </div>
    )
  })
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    
    <h3 style={{textAlign:"center", fontSize:"26px", color:"royalblue"}}>Submission</h3>
    
    {submittedList} <br></br>

    {error.length > 0 ?
    error.map((err, index) => {
      return (<p key={index} style={{ color: "red" }}> ERROR !!! : {err} </p>
        )}): null
    }
    </div>
  );
}


export default Form;
