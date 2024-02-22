function CreateButton(props){
  return ( <button className='button' onClick={()=>props.onButtonClick(props.buttonValue)}>{props.buttonValue}</button>)
};
export default CreateButton;