import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Celular} from '../../model/juego';
import {Celulares} from '../../service/juegos';

@Component({
  selector: 'app-lista-celulares',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-juegos.html',
  styleUrl: './lista-juegos.scss',
})
export class ListaCelulares {
  celulares: Celular[];

  constructor(private celularesService: Celulares) {
    this.celulares = this.celularesService.obtenerCelulares();
  }

}
