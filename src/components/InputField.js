import React from 'react'

export default function InputField(props) {
  const { name, onChange, children } = props;


  return (
    <div className="input-field">
      <input name={name} onChange={onChange} />
      {children}
    </div>
  )
}



