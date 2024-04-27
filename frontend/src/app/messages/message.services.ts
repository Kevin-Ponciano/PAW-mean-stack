import {inject, Injectable} from "@angular/core";
import {Message} from "./message.model";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";

@Injectable()
export class MessageService {
  private messageService: Message[] = [];
  private baseUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient);

  addMessage(message: Message) {
    this.messageService.push(message);

    return this.http.post(this.baseUrl + 'messages/save', message).pipe(
      catchError((error: any) => this.errorHandler(error, 'addMessage()'))
    );
  }

  deleteMessage(message: Message) {

    this.messageService.splice(this.messageService.indexOf(message), 1);
  }

  getMessages(): Observable<any> {
    return this.http.get(this.baseUrl + 'messages').pipe(
      map((response: any) => {
        const messages = response.data;

        let transformedMessages: Message[] = [];
        for (let message of messages) {
          transformedMessages.push(new Message(message.content, 'Alguém', message._id));
        }
        this.messageService = transformedMessages;
        return transformedMessages;
      }),
      catchError((error: any) => this.errorHandler(error, 'getMessages()'))
    )
  }

  errorHandler(error: any, info: string): Observable<any> {
    throw ({
      info: info,
      error_server: error,
      error_client: 'Client error: errorHandler : occurred error in the service.'
    })
  }
}
