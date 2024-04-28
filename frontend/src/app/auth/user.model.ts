import {Message} from "../messages/message.model";

export class User{
  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public messages?: Message[],
    public _id?: string
  ) {}
}
