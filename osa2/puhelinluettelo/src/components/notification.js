  
import React from 'react'

const Ilmolitusviesti = ({ viesti }) => {
  if (viesti === null) {
    return null
  } else if (viesti.error) {
    return (
      <div className='error'>
        {viesti.msg}
      </div>
    )
  } else {
    return (
      <div className='status'>
        {viesti.msg}
      </div>
    )
  }
}

export default Ilmolitusviesti