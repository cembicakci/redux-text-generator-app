import React from 'react'
import './style.css'

function Input() {
  return (
    <div className='input-container'>
      <div className='input-item'>
        <label>Paragraphs</label>
        <input type='number' />
      </div>

      <div className='input-item'>
        <label>Include HTML</label>
        <select>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    </div>
  )
}

export default Input