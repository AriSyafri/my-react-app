
const Button = (props) => {
    // use destructuring
    const {
      children = "...", 
      classname = "bg-black"
    } = props;
    return(
      <button 
        className={`h-10 px-6 font-semibold text-white rounded-md ${classname}`} 
        type="submit"
      >
        {children}
      </button>
    );
  };

export default Button;