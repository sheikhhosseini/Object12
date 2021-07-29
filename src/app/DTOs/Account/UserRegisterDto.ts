export class UserRegisterDto{
  constructor(
    public Email:string,
    public Password:string,
    public ConfirmPassword:string,
    public FirstName:string,
    public LastName:string,
    public MobileNumber:string,
    public Gender:boolean,
  ) {
  }
}
