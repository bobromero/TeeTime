import React from 'react'

const User = ({ params }: { params: { uid: string } }) => {
  return (
    <div>
      <h1>UserPage for {params.uid}</h1>
      <p>User name from db lookup</p>
    </div>
  )
}

export default User