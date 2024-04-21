import { UserInfo } from "./getUserInfo";
import { pool } from "../../Pool";

async function QueryUser(username: string): Promise<UserInfo> {
  let userInfo: UserInfo;
  try {
    const client = await pool.connect();
    console.log("connected");
    username = username.replaceAll('%20', ' ')

    const result = await client.query("SELECT username,handicap,bio FROM golfer WHERE username = '" + username + "';")

    const data = result.rows;
    if (data <= 0) {
      return {
        UserName: 'NotFound',
        Handicap: -1,
        Bio: 'null',
        GolferID: 'null',
        pfpLink: 'null',
        hashedPW: 'null'
      }
    }

    userInfo = {
      UserName: result.rows[0].username,
      Handicap: result.rows[0].handicap,
      Bio: result.rows[0].bio,
      GolferID: result.rows[0].golferid,
      pfpLink: result.rows[0].pfplink,
      hashedPW: ''
    };

    client.release();
    return userInfo;
  } catch (error) {
    console.error("Error getting data: ", error);
    throw error;
  }
}

export async function GetUser(username: string): Promise<UserInfo> {
  let UserInfo: UserInfo = await QueryUser(username);

  return UserInfo;
}