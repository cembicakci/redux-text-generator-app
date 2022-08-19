import React, { useEffect, useState } from 'react'
import './style.css'

import { useSelector, useDispatch } from 'react-redux'
import { setParas, setFormat } from '../../redux/textSlice';

function Input() {

  const dispatch = useDispatch();
  const paras = useSelector(state => state.text.paras)
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(paras)
  }, [paras])

  return (
    <div className='input-container'>
      <div className='input-item'>
        <label>Paragraphs</label>
        <input value={value} type='number' onChange={(e) => dispatch(setParas(Number(e.target.value)))} />
      </div>

      <div className='input-item'>
        <label>Include HTML</label>
        <select onChange={(e) => dispatch(setFormat(e.target.value))}>
          <option value='text'>Yes</option>
          <option value='html'>No</option>
        </select>
      </div>
    </div>
  )
}

export default Input