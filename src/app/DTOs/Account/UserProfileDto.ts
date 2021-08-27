export class UserProfileDto{
 constructor(
   public email: string,
   public address: string,
   public age: number,
   public bio: string,
   public firstName: string,
   public gender: boolean,
   public imageAvatar: string,
   public lastName: string,
   public mobileNumber: string
 ) {
 }
}
