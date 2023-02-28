import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { io } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private socket: Socket) {}
  socket2 = io('http://localhost:3000');

  public sendClientMessage(message: any) {
    console.log('sendMessage: ', message);
    this.socket.emit('message', message);
  }
  sendMessage(event: any, msg: string) {
    this.socket.emit(event, msg);
  }
  getMessage(event: any) {
    return this.socket.fromEvent(event).pipe(map((data) => data));
  }
  onFetchMovies() {
    return this.socket.fromEvent('fetchMovies');
  }
}
