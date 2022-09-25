import React from 'react'

export default function SingleChoice(props) {
  const { choices, name, onChange, children } = props;


  return (
    <div className="single-choice">
      {choices.map((choice, index) => {
        return (
          <div key={index}>
            <label>{choice.label}
              <input type="radio" name={name} value={choice.value} onChange={onChange} />
              {children}
            </label>
          </div>
        )
      }
      )}
    </div>
  )
}

