import React from 'react'
import {useUserContext} from "../context/userContext"

function Greeting() {
    const {user} = useUserContext();
  return (
    <div>Hello </div>
  )
}

export default Greeting