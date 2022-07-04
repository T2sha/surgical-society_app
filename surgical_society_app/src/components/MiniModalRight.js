import React from 'react'
import ErrorAsset from '../Icons/error.svg';

const MiniModalRight = (props) => {
  return (
    <div className='alertMiniModalRight'>
        <img src={ErrorAsset} />
        <p>{props.message}</p> 
    </div>
  )
}

export default MiniModalRight
