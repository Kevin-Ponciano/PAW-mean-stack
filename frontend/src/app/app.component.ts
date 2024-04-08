import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Message} from "./messages/message.model";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageListComponent, MessageInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  messageBinding: Message = new Message("Hello Angular!", "Kevin");
}
