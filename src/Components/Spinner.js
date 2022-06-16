import React from 'react'
import Loading from './Spinner-3.gif'
export default function Spinner(){
    return (
      <div className="text-center my-2">
          <img src={Loading} alt="Loading" />
      </div>
    )
}
