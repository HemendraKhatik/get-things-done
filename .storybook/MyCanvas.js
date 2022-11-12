import React from 'react'

export function MyCanvas({children}) {
  return (
    <div
    style={{
      backgroundColor: "#000000",
      color: "#f2f2f2f",
      borderRadius:10
    }}
  >
    {children}
  </div>
  )
}
