import {FormsModule} from "@angular/forms";
import {Component, inject} from '@angular/core';
import {MessageService} from "./message.services";
import {Message} from "./message.model";

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
})

export class MessageInputComponent {
  private messageService = inject(MessageService);

  onSave(text: string) {
    const messageAux = new Message(text, 'ViníciusRosalen');
    this.messageService.addMessage(messageAux);
    console.log(this.messageService.getMessages());
  }
}
