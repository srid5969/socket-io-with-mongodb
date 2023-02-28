import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
})
export class DashBoardComponent implements OnInit {
  newMessage = '';
  messageList: string[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    console.log('dfjkbgjhw');
    try {
      console.log(this.chatService.getMessage('demo'));
    } catch (error) {
      console.log(error);
    }
    // this.chatService.sendMessage('demo', this.newMessage);
    // this.chatService.getMessage('demo').subscribe((message: any) => {
    //   console.log(message);

    //   this.messageList.push(message);
    // });
  }

  sendMessage() {
    console.log("lksdhjfahgsidfgailsdfgasd",this.chatService.getMessage('demo'));

    this.chatService.sendMessage('demo', this.newMessage);
    this.newMessage = '';
  }
}
