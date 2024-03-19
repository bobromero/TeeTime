//* export a function to pull images from a modular source
let imgURL: string = 'localhost:3000';//if you want to use an external source for fetching images, otherwise use local public/photos
//! important, using 2 slashes for absolute path
let imgSrc: string = "//" + imgURL + '/Photos'; //* if I wanted to move photos to another server, I would just transfer the folder as is and change the imgURL to the correct url

export enum TypeImage {
  Place,// course or range etc
  User,  // pfp or post images
  Utility
}
/**
 * 
 * @param TypeImage TypeImage enum value
 * @param ID String or number relating to specific image stored in database
 * @returns Url to image
 */
export function QueryImage(ID: string | number, Image: TypeImage = TypeImage.Utility): string {

  let ImageQuery: string = ID.toString();

  ImageQuery = ImageQuery + ".png"

  let path: string = "/Utility";
  switch (Image) {
    case TypeImage.Place:
      path = "/Places"
      break;
    case TypeImage.User:
      path = "/Users"
      break;
    case TypeImage.Utility:
      path = "/Utility"
      break;

    default:
      break;
  }

  return imgSrc + path + "/" + ImageQuery;
}