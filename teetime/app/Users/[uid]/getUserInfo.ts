export type UserInfo = {
  UserName: string,
  Handicap: number,
  Bio: string,
  GolferID: string,
  pfpLink: string,
  hashedPW: string
}

export function getUserInfo(golferId: string): UserInfo {
  let UI: UserInfo = {
    UserName: "Rob",
    Handicap: 7,
    Bio: "The big man",
    GolferID: "",
    pfpLink: "",
    hashedPW: "123"
  }
  return UI;
}