import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchText } from '../../redux/textSlice';

import './style.css'


function Content() {
  const dispatch = useDispatch();

  const paras = useSelector(state => state.text.paras)
  const format = useSelector(state => state.text.format)

  const text = useSelector(state => state.text.items)

  useEffect(() => {
    dispatch(fetchText({ paras: paras, format: format }))
  }, [paras, format])
  return (
    <div className='content'>{text}</div>
  )
}

export default Content