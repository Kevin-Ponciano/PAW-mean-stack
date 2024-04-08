import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MessageComponent} from "./messages/message.component";
import {Message} from "./messages/message.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  messageBinding: Message = new Message("Hello Angular!","Kevin");
}
