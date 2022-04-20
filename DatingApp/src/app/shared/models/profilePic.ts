export class ProfilePic {
  image_id: string;
  user_id: string;
  image: string;

  constructor(image_id: string, user_id: string, image: string) {
    this.image_id = image_id;
    this.user_id = user_id;
    this.image = image;
  }
}
