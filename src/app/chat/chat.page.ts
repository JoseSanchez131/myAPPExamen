import { Component, OnInit } from '@angular/core';
import { IMensaje } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  mensajesUsuarios: (IMensaje)[] = [];
  mensaje: string;
 
  constructor( private _toastCtrl : ToastController, private _productoService : ProductoService, private _usuariosService: UsuarioService) {}

  ngOnInit() {
    
  }
//Generamos el metodo que llama el boton que hace el insert de los mensajes cogiendo en el mensaje que metemos por pantalla
  mensajesList(mensaje) {
    let mensajesUsuarios: (IMensaje)
  
    mensajesUsuarios = {
      "emisor" : "n9NDsnNsUMf9yp0RI1GIFRAoP8t21",
      "destinatario": "n9NDsnNsUMf9yp0RI1GIFRAoP8t3",
      "mensaje": mensaje,
      
    }
  
    this._usuariosService.setmensajeUsuarios(mensajesUsuarios);
   
  }

}
