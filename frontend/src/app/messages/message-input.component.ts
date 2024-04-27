import {FormsModule, NgForm} from "@angular/forms";
import {Component, inject} from '@angular/core';
import {MessageService} from "./message.services";
import {Message} from "./message.model";

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styles: `input.ng-invalid.ng-touched {
    border: 1px solid red
  } `
})

export class MessageInputComponent {
  private messageService = inject(MessageService);

  // onSave(text: string) {
  //   const messageAux = new Message(text, 'ViníciusRosalen');
  //   this.messageService.addMessage(messageAux);
  //   console.log(this.messageService.getMessages());
  // }

  onSubmit(form: NgForm) {
    const messageAux = new Message(form.value.content, 'ViníciusRosalen');
    this.messageService.addMessage(messageAux).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
    form.resetForm();
  }
}
