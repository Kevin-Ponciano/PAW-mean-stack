import {Component, EventEmitter, Input, input, Output} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Message} from "./message.model";

@Component({
  selector: "app-message",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})

export class MessageComponent {
  messageVarClasse = input<Message>(new Message("",""))

  @Output() outputMessage = new EventEmitter<string>();
  onEdit(){
    this.outputMessage.emit('Texto retornado: venho de message (child) para app (parent)');
  }
}
