import BackCard from "./components/BackCard";
import FrontCard from "./components/FrontCard";
import Form from "./components/Form";
import FormComplete from "./components/FormComplete";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cardsContainer">
          <BackCard />
          <FrontCard />
        </div>
        {/* <Form /> */}
        <FormComplete />
      </div>
    </div>
  );
}

export default App;
