import { NextResponse } from 'next/server'

import { GetUser } from '../../Users/[uid]/GetUser'

export async function GET(request: Request) {
  const requestData = await request.json();
  // console.log(requestData);
  let username = requestData['username'];

  const User = await GetUser(username);


  return new Response('hello next', {
    status: 201,
  })
}
//TODO we can make this return information about the backend possibly