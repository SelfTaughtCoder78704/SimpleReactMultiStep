import React, { useState, useEffect } from "react"
import MultiSelect from "./MultiSelect"
import SingleChoice from "./SingleChoice"


// renders a multi-select question based on previous answers
const QuestionBasedOnPreviousAnswer = ({ type, conditions, previousAnswers, children, handleChange, choices, id, fallBack }) => {

  const [show, setShow] = useState(false);
  let foundAnswer = previousAnswers[conditions.question]

  console.log("foundAnswer", foundAnswer);
  const checkConditions = (conditions, foundAnswer) => {

    // check if the answer is an array
    if (Array.isArray(foundAnswer)) {
      return foundAnswer.sort().join(',') === conditions.value.sort().join(',')
    }

    // check if the answer is a string
    if (typeof foundAnswer === "string") {
      // checking if the answer matches the conditions
      return conditions.value === foundAnswer
    }


    return false
  }

  useEffect(() => {
    if (checkConditions(conditions, foundAnswer)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [conditions, foundAnswer, type])




  return (
    <div>
      {show && type === "multi-select" && <MultiSelect children={children} name={id} choices={choices} onChange={handleChange} />}
      {show && type === "single-choice" && <SingleChoice children={children} name={id} choices={choices} onChange={handleChange} />}

      {!show && fallBack}

    </div>
  )
}


export default QuestionBasedOnPreviousAnswer



