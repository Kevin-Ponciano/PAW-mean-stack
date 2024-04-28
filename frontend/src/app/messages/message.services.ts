import {inject, Injectable} from "@angular/core";
import {Message} from "./message.model";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import $ from "jquery";

@Injectable()
export class MessageService {
  private messageService: Message[] = [];
  private baseUrl: string = 'http://localhost:3000/';
  private http = inject(HttpClient);
  private headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }

  addMessage(message: Message) {
    return this.http.post(this.baseUrl + 'messages/save', message, {headers: this.headers}).pipe(
      map((response: any) => {
        const message = response.data;
        this.messageService.push(new Message(
          message.content, message.user.name, message.user._id, message._id));

        return response.message;
      }),
      catchError((error: any) => this.errorHandler(error, 'addMessage()'))
    );
  }

  deleteMessage(message: Message) {
    this.messageService.splice(this.messageService.indexOf(message), 1);
  }

  getMessages(): Observable<any> {
    return this.http.get(this.baseUrl + 'messages', {headers: this.headers}).pipe(
      map((response: any) => {
        const messages = response.data;
        let transformedMessages: Message[] = [];
        for (let message of messages) {
          transformedMessages.push(new Message(
            message.content, message.user.name, message.user._id, message._id));
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
