import BackCard from "./components/BackCard";
import FrontCard from "./components/FrontCard";
import Form from "./components/Form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cardsContainer">
          <BackCard />
          <FrontCard />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
