import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/domain/Usuario';
import { Message } from 'src/app/domain/message';
import { ChatServiceService } from 'src/app/services/chat-service.service';
import { SignInService } from 'src/app/services/sign-in.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  
  usuario: Usuario | any;
  myFriends: Usuario [] = [];
  messages: Message[] = [];
  public roomId: string  | any ;
  public messageText: string | undefined;
  public messageArray: { user: string, message: string }[] = [];
  private storageArray: { roomId: string | any, chats: { user: string, message: string | any }[] }[] = [];

  userList: Usuario | any;
  public phone: string | any;
  public currentUser: any;
  public selectedUser: Usuario | any;

  
  constructor(
    private chatService: ChatServiceService,
    private signInService: SignInService,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageServiceService
    
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const usuarioString = params['usuario'];
      if (usuarioString) {
        this.usuario = JSON.parse(usuarioString);
        this.userList = this.signInService.getFriendsList(this.usuario);
        this.currentUser = this.usuario;
        this.loadMessages();
      }
    });
  }

  selectUser(user: Usuario): void {
    this.selectedUser = user;
    this.loadMessages();
  }

  isSelected(user: Usuario): boolean {
    return this.selectedUser === user;
  }

  loadMessages(): void {
    if (this.selectedUser) {
      const myId = this.currentUser.id;
      const friendId = this.selectedUser.id;
      this.messages = this.storageService.getMessages(myId, friendId) || [];
    }
  }

  selectUserHandler(phone: string): void {
    if (this.selectedUser) {
      const roomId = this.selectedUser.roomId[this.currentUser.id];
    }
  }

}