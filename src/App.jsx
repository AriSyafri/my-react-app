import React from "react"
// reference https://legacy.reactjs.org/docs/components-and-props.html
import Button from "./components/Elements/Button";

function App() { 
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600">Login</h1>
        <p className="font-medium text-slate-500">
          Welcome please enter your details
        </p>
        <form action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-slate-700"
            >
              Email
            </label>
            <input 
              type="text" 
              className="w-full px-3 py-2 text-sm border rounded opacity-50 text-slate-700"
              placeholder="exmple@gmail.com"
            />
          </div>
          
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-slate-700"
            >
              Password
            </label>
            <input 
              type="text" 
              className="w-full px-3 py-2 text-sm border rounded opacity-50 text-slate-700"
              placeholder="*****"
            />
          </div>

          <Button
            // variant="bg-blue-400"
            className="w-full bg-blue-500"
          >
            Login
          </Button>
          
        </form>
      </div>
    </div>
  )
}

export default App
