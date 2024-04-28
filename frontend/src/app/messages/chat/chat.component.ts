import {FormsModule} from "@angular/forms";
import {Component, inject, OnInit} from '@angular/core';
import {MessageComponent} from '../message.component';
import {Message} from '../message.model';
import {MessageService} from '../message.services';
import {NgClass} from "@angular/common";
import {AuthServices} from "../../auth/auth.services";
import $ from "jquery";

@Component({
  selector: 'app-message-chat',
  standalone: true,
  imports: [
    FormsModule,
    MessageComponent,
    NgClass
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  private authService = inject(AuthServices);
  user = this.authService.user();

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    setInterval(() => {
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
    }, 1000);

    $('#chat').on('DOMNodeInserted', function () {
      $(this).animate({scrollTop: 100000000});
    })
  }
}
