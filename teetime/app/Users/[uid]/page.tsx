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
    </div>
  )
}
//* this will return when going to
//* ip:port/Users/{uid}
export default UserPage

