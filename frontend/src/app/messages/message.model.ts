import {User} from "../auth/user.model";

export class Message {
  constructor(
    public content: string,
    public user: User,
    public _id?: string,
  ) {}
}
