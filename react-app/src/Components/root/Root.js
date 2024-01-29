import React from 'react'
import { AuthContext } from '../../store/Context'
import { useContext } from 'react'

function root() {
    const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default root
