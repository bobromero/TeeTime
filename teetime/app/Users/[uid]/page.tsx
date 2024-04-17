import React from 'react'
import User from './User'

const UserPage = ({ params }: { params: { uid: string } }) => {
  return (
    <div>

      <User params={
        {
          uid: params.uid
        }
      } />

      <h1>Courses scored at list</h1>
    </div>
  )
}
//* this will return when going to
//* ip:port/Users/{uid}
export default UserPage

