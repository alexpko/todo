import React from 'react'

export default props => (
  <div style={{
    border: '1px solid #ccc',
    padding: '10px',   
    width: '500px',
    margin: '10px auto'
  }}>
    <h2>{props.name}<input type="checkbox"/></h2>     
  </div>
)