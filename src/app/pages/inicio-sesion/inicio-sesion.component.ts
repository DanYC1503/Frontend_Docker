import { Component } from '@angular/core';
import { Usuario } from 'src/app/domain/Usuario';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  usuario: Usuario | any;
  phoneNumber: any;
  listaUsuarios: Usuario[];

  constructor(private router: Router, private signInService: SignInService) {
    this.listaUsuarios = signInService.getListaUsuarios();
  }

  verificarSignIN(): void {
    if (!this.phoneNumber) {
      // Phone number is empty, display a message
      console.log('Ingrese un número telefónico por favor');
      return; // Exit the function early
    }
    // Check if the phone number exists in the user list
    console.log(this.phoneNumber);
    this.usuario = this.signInService.getUserByPhone(this.phoneNumber);
    if (this.usuario) {
      console.log(this.usuario);
      const userName = this.usuario.nombre;
      this.router.navigate(['pages/chat'], { queryParams: { usuario: JSON.stringify(this.usuario) } });
      
    } else {
      console.log('No existe el usuario');
    }
  }
}
