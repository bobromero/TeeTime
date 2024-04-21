import React from 'react'
import User from './User'
import { GetUser } from './GetUser'
import { UserInfo } from "./getUserInfo";
import Link from 'next/link';

const UserPage = ({ params }: { params: { uid: string } }) => {

  return (
    <div>

      <User params={
        {
          uid: params.uid
        }
      } />

      <h1>Courses scored at list</h1>


      <Link href={'/UpdateUser/' + params.uid}>Update Info</Link>
      <Link href={'/DeleteUser/' + params.uid}>Delete User</Link>
    </div>
  )
}
//* this will return when going to
//* ip:port/Users/{uid}
export default UserPage

