export type UserInfo = {
  UserName: string,
  Handicap: number,
  Bio: string
}

export function getUserInfo(golferId: string): UserInfo {
  let UI: UserInfo = {
    UserName: "Rob",
    Handicap: 7,
    Bio: "The big man"
  }
  return UI;
}