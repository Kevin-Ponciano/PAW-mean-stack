export class Message {
  messageId: string;
  content: string;
  userId: number;
  username: string;

  constructor(messageId: string, content: string, userId: number, username: string) {
    this.messageId = messageId;
    this.content = content;
    this.userId = userId;
    this.username = username;
  }
}
