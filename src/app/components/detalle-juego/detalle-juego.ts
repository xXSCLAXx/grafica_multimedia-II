import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import {Celular} from '../../model/juego';
import {Celulares} from '../../service/juegos';

@Component({
  selector: 'app-detalle-celular',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-juego.html',
  styleUrl: './detalle-juego.scss',
})
export class DetalleCelular {
  celular: Celular | undefined;

  constructor(
    private route: ActivatedRoute,
    private celularesService: Celulares) {
    const nombre = this.route.snapshot.paramMap.get('nombre') ?? '';
    this.celular = this.celularesService.obtenerCelularPorNombre(nombre);
  }
}
