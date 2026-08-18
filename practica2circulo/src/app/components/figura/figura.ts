import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AccionFigura, PanelValores } from '../panel-valores/panel-valores';


@Component({
  selector: 'app-figura',
  imports: [CommonModule, PanelValores],
  templateUrl: './figura.html',
  styleUrl: './figura.scss',
})
export class Figura {
posicionX: number = 100;
posicionY: number = 100;
tamano: number = 80;
color : string = '#ff6b6b';
visible: boolean = true;

moverDerecha():void{
  this.posicionX += 20;
}
  moverIzquierda():void{
    this.posicionX -= 20;
  }
  moverArriba():void{
    this.posicionY -= 2;
  }
  moverAbajo():void{
    this.posicionY += 20;
  }

  moverDiagonalArribaDerecha():void{
    this.posicionX += 20;
    this.posicionY -= 20;
  }
  moverDiagonalArribaIzquierda():void{
    this.posicionX -= 20;
    this.posicionY -= 20;
  }
  moverDiagonalAbajoDerecha():void{
    this.posicionX += 20;
    this.posicionY += 20;
  }
  moverDiagonalAbajoIzquierda():void{
    this.posicionX -= 20;
    this.posicionY += 20;
  }

  agrandar():void{
  this.tamano += 10;
  }
  achicar():void{
  if (this.tamano > 20){
    this.tamano -=10;
  }
  }
  cambiarColor(nuevoColor: string):void{
  this.color = nuevoColor;
  }
  alternarVisibilidad():void{
  this.visible = !this.visible;
  }

  ejecutarAccion(accion: AccionFigura): void {
    switch (accion) {
      case 'arriba': this.moverArriba(); break;
      case 'abajo': this.moverAbajo(); break;
      case 'izquierda': this.moverIzquierda(); break;
      case 'derecha': this.moverDerecha(); break;
      case 'diagonal-arriba-izquierda': this.moverDiagonalArribaIzquierda(); break;
      case 'diagonal-arriba-derecha': this.moverDiagonalArribaDerecha(); break;
      case 'diagonal-abajo-izquierda': this.moverDiagonalAbajoIzquierda(); break;
      case 'diagonal-abajo-derecha': this.moverDiagonalAbajoDerecha(); break;
      case 'agrandar': this.agrandar(); break;
      case 'achicar': this.achicar(); break;
      case 'rojo': this.cambiarColor('#ff6b6b'); break;
      case 'azul': this.cambiarColor('#4dabf7'); break;
      case 'visibilidad': this.alternarVisibilidad(); break;
    }
  }
}
