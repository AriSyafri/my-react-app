
const Button = (props) => {
    // use destructuring
    const {
      children = "...", 
      classname = "bg-black",
      onClick = () => {},
      type = "button",
    } = props;
    return(
      <button 
        className={`h-10 px-6 font-semibold text-white rounded-md ${classname}`} 
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

export default Button;