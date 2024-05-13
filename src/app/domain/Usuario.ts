export interface Usuario {
    id?: number;
    telefono?: string;
    nombre?: string;
    image_url?: string;
    chatId?: number[]; // Use ":" instead of "[]" for type declaration
  }
  