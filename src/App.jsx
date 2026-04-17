import React from "react"
// reference https://legacy.reactjs.org/docs/components-and-props.html
import Button from "./components/Elements/Button";

function App() { 
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="flex gap-x-2">
        <Button variant="bg-red-500">logout</Button>
        <Button variant="bg-slate-300">login</Button>
        <Button></Button>
      </div>
    </div>
  )
}

export default App
