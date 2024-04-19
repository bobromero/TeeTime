import { GetCourses } from "./GetCourses";

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
export async function GetCourseTiles(amount: number = 5): Promise<TileInformation[]> {
  let ret: TileInformation[] = [];
  let res: CourseInformation[] = await GetCourses(amount);
  for (let i = 0; i < res.length; i++) {
    ret.push(CourseToTile(res[i]))
  }
  return ret;
}

function CourseToTile(Course: CourseInformation): TileInformation {
  return {
    Name: Course.Name,
    address: Course.address,
    description: Course.description,
    UPID: Course.UPID
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