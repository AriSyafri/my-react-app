import React from "react"

// define a componen
class Button extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold text-black rounded-md bg-slate-100" type="submit">
        Buy now
      </button>
    );
  }
}

// function js
function ButtonBlack() {
  return(
    <button className="h-10 px-6 font-semibold text-white bg-black rounded-md" type="submit">
      Button Black
    </button>
  );
}

// arrow function js
const ButtonRed = () => {
  return(
    <button className="h-10 px-6 font-semibold text-white rounded-md bg-red-950" type="submit">
      Button Red
    </button>
  );
}

function App() { 
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="flex gap-x-2">
        <Button></Button>
        <Button></Button>
        <ButtonRed></ButtonRed>
        <Button></Button>
        <ButtonBlack></ButtonBlack>
      </div>
    </div>
  )
}

export default App
