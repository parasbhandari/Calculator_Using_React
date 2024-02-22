import CreateButton from './CreateButton';
function ButtonContainer(props){
  const calculatorButton=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];

  return (
  <div className="buttons-container">
  {
    calculatorButton.map((name)=>(
      <CreateButton buttonValue={name} onButtonClick={props.onButtonClick}></CreateButton>
    ))
  }
  </div>
  );
};
export default ButtonContainer;