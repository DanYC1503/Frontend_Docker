import { Injectable, OnInit } from '@angular/core';
import { Usuario } from '../domain/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SignInService implements OnInit {
  listaUsuarios: Usuario[] = [];
  friendsList: Usuario [] = [];
  friend: Usuario | any;
  private userList = [
    {
      id: 1,
      name: 'David Alvarado',
      phone: '0953210902',
      image: 'assets/User_images/alvarado.jpeg',
      chatId: [1, 3, 4]
    },
    {
      id: 2,
      name: 'Daniel Yanza',
      phone: '0979251007',
      image: 'assets/User_images/Dan_me.jpeg',
      chatId: [1, 4]
    },
    {
      id: 3,
      name: 'Neli Suarez',
      phone: '0901029432',
      image: 'assets/User_images/user_3.jpeg',
      chatId: [1, 2, 4]
    },
    {
      id: 4,
      name: 'Samantha Granda',
      phone: '0956789201',
      image: 'assets/User_images/chuckles.jpeg',
      chatId: [1, 2, 3]
    }
  ];

  constructor() { 
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.userList.forEach(user => {
      const usuario: Usuario = {
        telefono: user.phone,
        nombre: user.name,
        image_url: user.image,
        chatId: user.chatId
      };
      this.listaUsuarios.push(usuario);
    });
  }

  public getUserByPhone(phoneNumber: string): Usuario | null {
    return this.listaUsuarios.find(usuario => usuario.telefono === phoneNumber) || null;
  }

  public getListaUsuarios(): Usuario[] {
    return this.listaUsuarios;
  }
  public getFriendsList(user: Usuario): Usuario[] {
    this.friendsList = [];

    if (!user.chatId) {
      return this.friendsList;
    }

    for (let roomId of user.chatId) {
      const friend = this.userList.find(u => u.id === roomId);
      if (friend) {
        this.friendsList.push({
          id: friend.id,
          nombre: friend.name,
          image_url: friend.image,
          chatId: friend.chatId
        });
      }
    }

    return this.friendsList;
  }
}

