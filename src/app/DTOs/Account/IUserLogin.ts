export interface IUserLogin{
  status : string,
  data : {
    token : string,
    expireTime : number,
    firstName : string,
    userId : number
  }
}
