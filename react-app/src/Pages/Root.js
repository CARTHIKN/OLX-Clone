import React from 'react'
import { AuthContext } from '../store/Context'
import { useContext } from 'react'

function Root() {
    const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default Root
