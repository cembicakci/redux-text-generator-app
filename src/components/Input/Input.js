import React from 'react'
import './style.css'

import { useSelector } from 'react-redux'

function Input() {

  const paras = useSelector(state => state.text.paras);
  console.log(paras)

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