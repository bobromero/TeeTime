//* export a function to pull images from a modular source
//! important, use 2 slashes for absolute path
let imgURL: string = '//localhost:3000';//if you want to use an external source for fetching images, otherwise use local public/photos
let imgSrc: string = imgURL + '/Photos'; //* if I wanted to move photos to another server, I would just transfer the folder as is and change the imgURL to the correct url

enum TypeImage {
  Place,// course or range etc
  User  // pfp or post images
}
/**
 * 
 * @param TypeImage TypeImage enum value
 * @param ID String or number relating to specific image stored in database
 * @returns Url to image
 */
export function QueryImage(Typeimage: TypeImage, ID: string | number): string {

  let ImageQuery: string = ID.toString();

  if (ImageQuery == '3') {
    ImageQuery = "TempLogoTeeTime.png";
  }

  return imgSrc + (Typeimage == TypeImage.Place ? "/Places" : "/Users/" + ImageQuery);
}