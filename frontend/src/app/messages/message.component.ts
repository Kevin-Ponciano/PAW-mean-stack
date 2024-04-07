import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-message",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})

export class MessageComponent {
  message = {
    content: "Hello, frontend",
    author: "Kevin"
  };
}
