import  {AuthProvider}  from "./Components/AuthProvider";
import MyComponent from './MyComponent';
function App() {
  return (
    <AuthProvider>
      <MyComponent/>
    </AuthProvider>
  );
}
export default App;
