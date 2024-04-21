import React from 'react'
import Link from 'next/link';
import { GetUser } from '../../Users/[uid]/GetUser';
import { UserInfo } from '../../Users/[uid]/getUserInfo';
import RemoveUserForm from './RemoveUserForm';
const UserPage = async ({ params }: { params: { uid: string } }) => {
  const user: UserInfo = await GetUser(params.uid);
  return (
    <div>

      <h1>Remove User {user.UserName}</h1>

      <RemoveUserForm params={{
        info: user
      }} />
    </div>
  )
}

export default UserPage

