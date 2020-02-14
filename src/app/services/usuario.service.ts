import { Injectable } from '@angular/core';
import { IProducto, ITecnologia, IInmobiliaria, IMotor, IMensaje } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()

export class UsuarioService{
    constructor(private _db:AngularFireDatabase){}

    getUsuarios(){
        let ref = this._db.database.ref("usuarios");
        return ref;
}
    getUsuario(id){
        let ref = this._db.database.ref("usuario/" +id);
        return ref;

    }

    getmensajesUsuarios(): firebase.database.Reference{
        let ref = this._db.database.ref("mensajesUsuarios");
        return ref;
    }

    setmensajeUsuarios(usuario: IMensaje){
        let ref = this._db.database.ref("mensajesUsuarios");
        ref.push(usuario);
  
      }
    

}