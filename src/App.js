import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GameBoard from "./components/GameBoard";
import Game from "./components/Game"
function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Router>
    <Routes>

          <Route path="/" element={<GameBoard/>}>
          
          </Route>

          <Route path="/playNim" element={<Game/>}>
            
          </Route>
         
      </Routes>
    </Router>

    </div>
    </React.Fragment>
  );
}

export default App;
