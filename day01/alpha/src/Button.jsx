const Button = (props) => {
  return (
    <button className={`text-white bg-${props.bg}  rounded-lg py-0.5 px-2.5`}>
      {props.text}
    </button>
  );
};

export default Button;
