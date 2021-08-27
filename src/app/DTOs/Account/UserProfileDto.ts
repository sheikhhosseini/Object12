export class UserProfileDto{
 constructor(
   public address: string,
   public age: number,
   public bio: string,
   public email: string,
   public firstName: string,
   public gender: boolean,
   public imageAvatar: string,
   public lastName: string,
   public mobileNumber: string
 ) {
 }
}
