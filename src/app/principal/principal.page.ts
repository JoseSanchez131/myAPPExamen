import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { IProductoUsuarios } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  uid:string;
  productosUsuarios: (IProductoUsuarios)[] = [];


  constructor(private _activatedRoute: ActivatedRoute, private _usuarioService : UsuarioService, private _toastCtrl : ToastController,private _productoService : ProductoService) { }

  async presentToast(total){
    const toast = await this._toastCtrl.create({
      message: `Actualmente te gustan ${total} productos`,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  ngOnInit() {
    let username = this._activatedRoute.snapshot.paramMap.get("username");
    let ref = this._usuarioService.getUsuarios();
    ref.orderByChild("usuarios").equalTo(username);
    ref.once("value", snapshot=>{
      snapshot.forEach(child => {

        console.log(username);

        if(child.val().nombre == username){
          this.uid = child.val().id;
          console.log(this.uid);
        }
          });
        });
  }

  countLikes(username){
    let ref = this._productoService.getProductosUsuarios();
  
    ref.orderByChild("propietario").equalTo(username).once("value", snapshot => {
      this.productosUsuarios = [];
      snapshot.forEach(child => {
        let value = child.val();
        this.productosUsuarios.push(value);
      });
      let total = this.productosUsuarios.length;
      this.presentToast(total);
  
    }
    );

  }
}