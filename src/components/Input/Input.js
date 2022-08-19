import React from 'react'
import './style.css'

import { useSelector, useDispatch } from 'react-redux'
import { setParas, setFormat } from '../../redux/textSlice';

function Input() {

  const dispatch = useDispatch();

  return (
    <div className='input-container'>
      <div className='input-item'>
        <label>Paragraphs</label>
        <input type='number' onChange={(e) => dispatch(setParas(Number(e.target.value)))} />
      </div>

      <div className='input-item'>
        <label>Include HTML</label>
        <select onChange={(e) => dispatch(setFormat(e.target.value))}>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
    </div>
  )
}

export default Input