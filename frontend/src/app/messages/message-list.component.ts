import {FormsModule} from "@angular/forms";
import {Component, OnInit} from '@angular/core';
import {MessageComponent} from './message.component';
import {Message} from './message.model';
import {MessageService} from './message.services';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [
    FormsModule,
    MessageComponent
  ],
  template: `
    <!--    <div class="col-md-8 col-md-offset-2">-->
    <!--      @for (msg of messages; track $index) {-->
    <!--        <app-message [messageVarClass]="msg" (outputMessage)="msg.content = $event"></app-message>-->
    <!--      } @empty {-->
    <!--        <h3>No Messages Available</h3>-->
    <!--      }-->
    <!--    </div>-->

  `,
})

export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getMessages()
      .subscribe({
          next: (messages: Message[]) => {
            this.messages = messages;
          },
          error: (error: any) => {
            console.log(error);
          }
        }
      );
  }
}
