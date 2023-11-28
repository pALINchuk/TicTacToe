import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Registration from "./Components/Registration/Registration";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
      <HashRouter>
        <div className="App">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/login' element={<Auth/>}/>
              <Route path='*' element={<h1>Not found!</h1>}/>
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
