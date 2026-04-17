
const Button = (props) => {
    // use destructuring
    const {
      children = "...", 
      variant = "bg-black"
    } = props;
    return(
      <button 
        className={`h-10 px-6 font-semibold text-white rounded-md ${variant}`} 
        type="submit"
      >
        {children}
      </button>
    );
  };

export default Button;