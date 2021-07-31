export interface IUserLogin{
  status : string,
  data : {
    token : string,
    expireTime : string,
    firstName : string,
    userId : number
  }
}
