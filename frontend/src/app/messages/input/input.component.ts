import {FormsModule, NgForm} from "@angular/forms";
import {Component, inject} from '@angular/core';
import {MessageService} from "../message.services";
import {Message} from "../message.model";
import {AuthServices} from "../../auth/auth.services";
import {ChatComponent} from "../chat/chat.component";
import $ from "jquery";

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule, ChatComponent],
  templateUrl: './input.component.html',
})

export class InputComponent {
  private messageService = inject(MessageService);
  private authService = inject(AuthServices);
  private user = this.authService.user();

  onSubmit(form: NgForm) {
    const messageAux = new Message(form.value.content, this.user.name, this.user._id);

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
