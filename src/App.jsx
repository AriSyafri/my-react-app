import React from "react"
// reference https://legacy.reactjs.org/docs/components-and-props.html
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() { 
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  )
}

export default App
