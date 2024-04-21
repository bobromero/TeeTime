const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function HashPassword(password: string): Promise<string> {
  const hash: string = await bcrypt.hash(password, saltRounds);
  return hash;
}

export async function ComparePassword(dbPassword: string, password: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, dbPassword)
  return isMatch;
}