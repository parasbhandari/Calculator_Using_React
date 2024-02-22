import './App.css';
import ButtonContainer from './components/ButtonContainer';
import Display from "./components/Display";
import {useState} from "react";
function App() {
  let [calVal,setCalVal]= useState("");
  function onButtonClick(name){
    if(name==="C"){
     setCalVal("");
    }
    else if(name==="="){
      const result= eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue=calVal+ name;
      setCalVal(newDisplayValue);
    }
    

  }
  return (
    <>
    <center>
    <div className="calculator">
       <Display displayValue={calVal}></Display>
       <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
    </center>
    </>
  );
};

export default App;
