import { Component } from '@angular/core';
import { IProducto, ITecnologia, IMotor, IInmobiliaria, IProductoUsuarios } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

categoria: string;
nombre: string;
descripcion: string;
precio: number;
metros: number;
banios:number;
habitaciones:number;
localidad: string;
km: number;
anio: number;
vehiculo: string;
estado:string;
texto: string = "Me gusta";
boton: boolean = false;


productos: (IProducto|ITecnologia|IInmobiliaria| IMotor) [] = [] ;
productosUsuarios: (IProductoUsuarios)[] = [];

  constructor( private _toastCtrl : ToastController, private _productoService : ProductoService) {}

  ngOnInit(){
    let ref = this._productoService.getProductos();
    
    ref.on("value", snapshot => {
      snapshot.forEach(child =>{
        let value = child.val();
        this.productos.push(value);
        console.log("he encontrado: " +child.val().nombre)
      })
    })
  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Producto añadido correctamente ',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  like(id) {

    let productoUsuario: (IProductoUsuarios)
  
    productoUsuario = {
      "idProducto" : id,
      "propietario": "n9NDsnNsUMf9yp0RI1GIFRAoP8t2",
    }
  
    this._productoService.setProductoUsuarios(productoUsuario);
    this.presentToast();
  
    /*ref.once("value", snapshot => {
      if (snapshot.child("categoria").val() == "h") {
        ref.child("nombre").set(this.producto.nombre);
        ref.child("descripcion").set(this.producto.descripcion);
        ref.child("precio").set(this.producto.precio);
        this.presentToast();
      }
    }*/
  }
  
  dislike(id) {
  
    let ref = this._productoService.getProductosUsuarios();
  
    ref.orderByChild("idProducto").equalTo(id).once("value", snapshot => {
      this.productosUsuarios=[];
      snapshot.forEach(child => {
      let clave = child.key;
      ref.child(clave).remove();
      })
      });
      
    this.presentToast();
  }
  
  
  
  
  }