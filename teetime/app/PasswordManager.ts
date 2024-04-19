const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function HashPassword(password: string): Promise<string> {
  const hash: string = await bcrypt.hash(password, saltRounds);
  return hash;
}

export async function ComparePassword(username: string, password: string) {
  //!get user password and use bcrypt compare method
  // const isMatch = await bcrypt.compare(password, hashedpassword)
}