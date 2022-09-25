import React from 'react'



export default function MultiSelect(props) {
  const { choices, name, onChange, children } = props;


  return (
    <div className="multi-select">
      {choices.map((choice, index) => {
        return (
          <div key={index}>
            <label>{choice.label}
              <input type="checkbox" name={name} value={choice.value} onChange={onChange} />
              {children}
            </label>
          </div>
        )
      }
      )}
    </div>
  )
}



