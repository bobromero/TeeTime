import React from 'react'
import UpdateUserForm from './UpdateUserForm'

function page({ params }: { params: { uid: string } }) {
  return (
    <div>
      <h1>Update Info</h1>

      <UpdateUserForm params={{
        Name: params.uid
      }} />

    </div>
  )
}

export default page