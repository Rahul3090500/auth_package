import  {AuthProvider}  from "./Components/AuthProvider";
import MyComponent from './MyComponent';
import React from "react";

function App() {
  return (
    <AuthProvider>
      <MyComponent/>
    </AuthProvider>
  );
}
export default App;
