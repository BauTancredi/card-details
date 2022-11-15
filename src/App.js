import BackCard from "./components/backCard";
import FrontCard from "./components/frontCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cardsContainer">
          <BackCard />
          <FrontCard />
        </div>
        <div className="formContainer">test</div>
      </div>
    </div>
  );
}

export default App;
