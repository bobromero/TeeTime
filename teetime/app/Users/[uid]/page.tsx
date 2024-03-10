import React from 'react'

const UserPage = ({ params }: { params: { uid: string } }) => {
  return (
    <div>UserPage for {params.uid}</div>
  )
}
//* this will return when going to
//* ip:port/Users/{uid}
export default UserPage

