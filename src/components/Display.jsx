function Display(props){
  return (
    <input type="text" className="display" value={props.displayValue} readOnly />
  )
};
export default Display;