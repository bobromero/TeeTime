export type CourseInformation = {
  Name: string;
  description: string;
  address: string;
  UPID: string;
  NumberOfHoles: number;
  Yardage: number;
}
export type TileInformation = {
  Name: string;
  address: string;
  description: string;
  UPID: string;
}
/**
 * @param [amount=5] number of course results to get
 * 
 * @returns Tiles
 */
export function GetCourseTiles(amount: number = 5): TileInformation[] {
  let dummyCourse1: CourseInformation = {
    Name: "Dumb Dumb's land of unimaginable bogeys",
    description: "Dummy tile info",
    address: "69 Alice RD",
    UPID: "80085",
    NumberOfHoles: 18,
    Yardage: 7209
  }
  let dummyCourse2: CourseInformation = {
    Name: "Dumb Dumb's land of unimaginable doubles",
    description: "Dummy tile info",
    address: "69 Alice RD",
    UPID: "80085",
    NumberOfHoles: 18,
    Yardage: 7209
  }
  let dummyCourse3: CourseInformation = {
    Name: "Birdie paradise",
    description: "Dummy tile info",
    address: "69 Alice RD",
    UPID: "80085",
    NumberOfHoles: 18,
    Yardage: 7209
  }
  let dummyCourse4: CourseInformation = {
    Name: "Rob's world",
    description: "Dummy tile info",
    address: "69 Alice RD",
    UPID: "80085",
    NumberOfHoles: 18,
    Yardage: 7209
  }
  let dummyCourse5: CourseInformation = {
    Name: "Paradise Falls",
    description: "Dummy tile info",
    address: "69 Alice RD",
    UPID: "80085",
    NumberOfHoles: 18,
    Yardage: 7209
  }

  let ret: TileInformation[] = [];
  // for (let i = 0; i < amount; i++) {


  // }
  ret.push(CourseToTile(dummyCourse1));
  ret.push(CourseToTile(dummyCourse2));
  ret.push(CourseToTile(dummyCourse3));
  ret.push(CourseToTile(dummyCourse4));
  ret.push(CourseToTile(dummyCourse5));

  return ret;
}

function CourseToTile(dummyCourse: CourseInformation): TileInformation {
  return {
    Name: dummyCourse.Name,
    address: dummyCourse.address,
    description: dummyCourse.description,
    UPID: dummyCourse.UPID
  }



}
/**
   * 
   * @param UPID Id of the course you want info from
   */
export function GetCourseInfo(UPID: string): CourseInformation {
  return {
    Name: "TOP GOLF COURSE",
    description: "WInniner",
    address: "68 random street",
    UPID: UPID,
    NumberOfHoles: 18,
    Yardage: 6578
  }
}