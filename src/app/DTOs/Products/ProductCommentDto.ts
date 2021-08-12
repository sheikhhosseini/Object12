export class ProductCommentDto{
  constructor(
    public commentText: string,
    public userFullName: string,
    public isAccepted: string,
    public productId: number,
    public userId: number,
    public createDate: string
  ) {
  }
}
