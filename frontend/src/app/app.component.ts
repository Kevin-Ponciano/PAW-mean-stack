import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MessageComponent} from "./messages/message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  message = {
    content: "Hello, frontend",
    author: "Kevin"
  }
}
