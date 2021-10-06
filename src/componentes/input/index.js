import "./input.css";
const Input = (props) => {
  const classes = `input ${props.variant}`;
  return (
    <input className={classes} placeholder={props.placeholder}>
      {props.children}
    </input>
  );
};

export default Input;
