import { Injectable } from '@angular/core';
import { Juego } from '../model/juego';

@Injectable({
  providedIn: 'root',
})
export class Juegos {
  private listaJuegos: Juego[] =[
    {
      id: 1,
      nombre: 'The Legend of Zelda: Breath of the Wild',
      genero: 'Aventura',
      plataforma: 'Nintendo Switch',
      anio: 2017,
      rating: 9.7,
      imagen: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg'
    },
    {
      id: 2,
      nombre: 'Super Mario Odyssey',
      genero: 'Plataformas',
      plataforma: 'Nintendo Switch',
      anio: 2017,
      rating: 9.5,
      imagen: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg'
    },
    {
      id: 3,
      nombre: 'Minecraft',
      genero: 'Sandbox',
      plataforma: 'Multiplataforma',
      anio: 2011,
      rating: 9.0,
      imagen: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg'
    },
    {
      id: 4,
      nombre: 'God of War Ragnarök',
      genero: 'Acción',
      plataforma: 'PlayStation 5',
      anio: 2022,
      rating: 9.4,
      imagen: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg'
    },
    {
      id: 5,
      nombre: 'League of Legends',
      genero: 'MOBA',
      plataforma: 'PC',
      anio: 2009,
      rating: 8.5,
      imagen: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.jpg'
    },
    {
      id: 6,
      nombre: 'Stardew Valley',
      genero: 'Simulación',
      plataforma: 'Multiplataforma',
      anio: 2016,
      rating: 9.2,
      imagen: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7d.jpg'
    }
  ];

  obtenerJuegos():  Juego[] {
    return this.listaJuegos;
  }
  obtenerJuegoPorId(id :number): Juego | undefined{
    return this.listaJuegos.find((juego) => juego.id ===id);
  }
}
