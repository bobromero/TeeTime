import React from 'react'
import { getUserInfo, UserInfo } from '../../getUserInfo'

const User = ({ params }: { params: { uid: string } }) => {
  let Golfer: UserInfo = getUserInfo(params.uid);
  return (
    <div>
      <h1>UserPage for {params.uid}</h1>
      <h2>{Golfer.UserName}</h2>
      <h2>Handicap: {Golfer.Handicap}</h2>
      <p>{Golfer.Bio}</p>
    </div>
  )
}

export default User