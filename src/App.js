import Signup from "./pages/Signup";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      {/* 
        Route:
        sign in
        sign up
        forgot password
        ...
      */}
    </div>
  );
}

export default App;
