import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ToastController } from '@ionic/angular';
import { Iusuarios } from '../interfaces';

@Component({
  selector: 'app-mis-chats',
  templateUrl: './mis-chats.page.html',
  styleUrls: ['./mis-chats.page.scss'],
})
export class MisChatsPage implements OnInit {

  usuarios: (Iusuarios)[] = [];

  constructor( private _toastCtrl : ToastController, private _usuarioService : UsuarioService) {}


  //Obtenemos todos los usuarios con el metodo creado en usuario service y los vamos añadiendo en el array que luego llamaremos desde el HTML
  ngOnInit() {
    let ref = this._usuarioService.getUsuarios();
    
    ref.on("value", snapshot => {
      snapshot.forEach(child =>{
        let value = child.val();
        this.usuarios.push(value);
        console.log("he encontrado: " +child.val().nombre)
      })
    })
  }
  }

