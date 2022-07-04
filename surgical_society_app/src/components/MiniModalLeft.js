import React from 'react'
import ErrorAsset from '../Icons/error.svg';

const MiniModalLeft = (props) => {
  return (
    <div className='alertMiniModal'>
      <p>{props.message}</p>
      <img src={ErrorAsset} />
    </div>  
  )
}

export default MiniModalLeft
