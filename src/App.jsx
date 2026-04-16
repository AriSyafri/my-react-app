import React from "react"
// reference https://legacy.reactjs.org/docs/components-and-props.html

const Button = (props) => {
  return(
    <button 
      className={`h-10 px-6 font-semibold text-white rounded-md ${props.variant}`} 
      type="submit"
    >
      {props.children}
    </button>
  );
};

function App() { 
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="flex gap-x-2">
        <Button variant="bg-red-500">logout</Button>
        <Button variant="bg-slate-300">login</Button>
        <Button variant="bg-slate-500">register</Button>
      </div>
    </div>
  )
}

export default App
