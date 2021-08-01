export class UserLoginDto{
  constructor(
    public Email : string,
    public Password : string,
    public RememberMe : string
  ) {
  }
}
