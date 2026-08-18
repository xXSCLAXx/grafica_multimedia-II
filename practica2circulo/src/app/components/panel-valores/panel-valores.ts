import { Component, EventEmitter, Input, Output } from '@angular/core';

export type AccionFigura =
  | 'arriba'
  | 'abajo'
  | 'izquierda'
  | 'derecha'
  | 'diagonal-arriba-izquierda'
  | 'diagonal-arriba-derecha'
  | 'diagonal-abajo-izquierda'
  | 'diagonal-abajo-derecha'
  | 'agrandar'
  | 'achicar'
  | 'rojo'
  | 'azul'
  | 'visibilidad';

@Component({
  selector: 'app-panel-valores',
  templateUrl: './panel-valores.html',
  styleUrl: './panel-valores.scss',
})
export class PanelValores {
  @Input() posicionX = 0;
  @Input() posicionY = 0;
  @Input() tamano = 0;
  @Input() color = '';
  @Input() visible = false;
  @Output() accion = new EventEmitter<AccionFigura>();

  ejecutar(accion: AccionFigura): void {
    this.accion.emit(accion);
  }
}
