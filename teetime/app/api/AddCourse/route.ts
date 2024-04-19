import { NextRequest, NextResponse } from 'next/server'
import { AddCourseToDB } from '/Users/Robert/TeeTimeApp/teetime/AddCourse';


export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  console.log(JSON.parse(body));

  // AddCourseToDB("RobCourse", "53 Thorp st", "nicest golf around", 9, 4579);
  return NextResponse.json({
    status: 201,
    message: 'pog'
  })
}
