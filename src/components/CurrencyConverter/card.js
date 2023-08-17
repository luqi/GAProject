import React, { useState } from 'react';
import './card.css';

const stepsData = [
  { title: '1. Create account', content: 'It takes just a few minutes, and all you need is an email address.' },
  { title: '2. Enter details', content: "Add recipient (you'll need their address, bank account/IBAN, swift/BIC) and payment information."},
  { title: '3. Confirm and send', content: 'Check the currencies and amount are correct, get the expected delivery date, and send your money transfer' },
];

const Card = ({ step, backgroundColor }) => {
  const [currentStep, setCurrentStep] = useState(step);

  const nextStep = () => {
    setCurrentStep(currentStep === 2 ? 0 : currentStep + 1);
  };

  const cardStyle = {
    backgroundColor: backgroundColor || '#F4A261', // Use the provided background color or a default color
    width: '250px',
    padding: '30px',
  };

  return (
    <div className="step-card" style={cardStyle}>
      <h2>{stepsData[currentStep].title}</h2>
      <p>{stepsData[currentStep].content}</p>
      {/* <button onClick={nextStep}>Next</button> */}
      <div className="arrow" onClick={nextStep}></div>
    </div>
  );
};

export default Card;
