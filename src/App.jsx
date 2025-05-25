import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React 💻",
  "Apply for Jobs 💼",
  "Invest in your New Income 💰",
];

function App() {
  // const step = 3();
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    step > 1 ? setStep(step - 1) : "";
  }

  function handleNext() {
    step < 3 ? setStep(step + 1) : "";
  }
  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className="close" onClick={handleIsOpen}>&times;</button>

      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step{step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
     ) }
    </>
  );
}

export default App;
