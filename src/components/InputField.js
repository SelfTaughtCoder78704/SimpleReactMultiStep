import React from 'react'

export default function InputField(props) {
  const { name, onChange } = props;


  return (
    <div className="input-field">
      <input name={name} onChange={onChange} />
    </div>
  )
}



