import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { HeaderComponent } from './pages/header/header.component';
import { ChatComponent } from './pages/chat/chat.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

// Define routes outside of the AppRoutingModule class
const routes: Routes = [
  { path: 'pages/head', component: HeaderComponent },
  { path: 'pages/chat', component: ChatComponent },
  { path: '', component: InicioSesionComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)], // Add RouterModule.forRoot(routes) here
  exports: [RouterModule, CommonModule] // Export RouterModule and CommonModule
})
export class AppRoutingModule { }
