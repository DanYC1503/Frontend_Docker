import { Injectable } from '@angular/core';
import { Message } from '../domain/message';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }

  // Save messages for a chat
  saveMessages(myId: number, friendId: number, messages: Message[]): void {
    const storageKey = `${myId}-${friendId}`;
    localStorage.setItem(storageKey, JSON.stringify(messages));
  }

  // Retrieve messages for a chat
  getMessages(myId: number, friendId: number): Message[] | null {
    const storageKey = `${myId}-${friendId}`;
    const messagesJson = localStorage.getItem(storageKey);
    return messagesJson ? JSON.parse(messagesJson) : null;
  }
}
