import React from 'react'
import { getUserInfo, UserInfo } from './getUserInfo'
import { GetUser } from './GetUser';


const User = async ({ params }: { params: { uid: string } }) => {
  let Golfer: UserInfo = await GetUser(params.uid);
  return (
    <div>
      <img src={Golfer.pfpLink} />
      <h1>UserPage for {Golfer.UserName}</h1>
      <h2>Handicap: {Golfer.Handicap}</h2>
      <p>About Me: {Golfer.Bio}</p>
    </div>
  )
}

export default User