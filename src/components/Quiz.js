import React, { useState } from "react";
import InputField from "./InputField";
import MultiSelect from "./MultiSelect";
import SingleChoice from "./SingleChoice";
import Interstitial from "./Interstitial";

export default function Quiz(props) {
  const { Qs, As, onEnd } = props



  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState(As);

  const steps = Qs.length;

  //single input field
  const onChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });

  }

  //multi select
  const onChangeMultiSelect = (e) => {
    const { name, value, checked } = e.target;
    let newAnswers = { ...answers };
    if (checked && !newAnswers[name].includes(value)) {
      newAnswers[name].push(value);
    } else {
      newAnswers[name] = newAnswers[name].filter((answer) => answer !== value);
    }
    setAnswers(newAnswers);
  }

  //single choice
  const onChangeSingleChoice = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  }



  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
    }
  }

  const onBack = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  const question = Qs.find((q) => q.qId === currentStep);

  return (
    <div className="quiz">
      <h1>Quiz</h1>
      <form onSubmit={onSubmit}>
        <h2>{question.question}</h2>
        {question.type === 'text' && <InputField name={`Q${question.qId}`} onChange={onChange} />}
        {question.type === 'multi-select' && <MultiSelect name={`Q${question.qId}`} choices={question.choices} onChange={onChangeMultiSelect} children={question.children ? question.children : null} />}
        {question.type === 'interstitial' && <Interstitial children={question.component} />}
        {question.type === 'single-choice' && <SingleChoice name={`Q${question.qId}`} choices={question.choices} onChange={onChangeSingleChoice} children={question.children ? question.children : null} />}
        <button type="submit">Next</button>
        <button onClick={onBack}>Back</button>
        {currentStep === steps && <div>{JSON.stringify(answers)}</div>}
        {currentStep === steps && <button onClick={() => onEnd(answers)}>Submit</button>}
      </form>
    </div>
  )
}

