import React from 'react'

// will return a slot that can take a component
export default function Interstitial(props) {
  const { children } = props;
  return (
    <div className="interstitial">
      {children}
    </div>
  )
}

