import { Injectable } from '@angular/core';
import { Celular } from '../model/juego';

@Injectable({
  providedIn: 'root',
})
export class Celulares {
  private listaCelulares: Celular[] = [
    {
      nombre: 'iPhone 15 Pro',
      marca: 'Apple',
      modelo: 'A3101',
      sistemaOperativo: 'iOS 17',
      almacenamiento: '256 GB',
      ram: '8 GB',
      pantalla: '6.1 pulgadas OLED',
      bateria: '3274 mAh',
      camara: '48 MP + 12 MP + 12 MP',
      procesador: 'A17 Pro',
      colores: ['Titanio natural', 'Titanio azul', 'Titanio blanco', 'Titanio negro'],
      anioLanzamiento: 2023,
      cargaRapida: 'Carga rápida de 20 W',
      resistenciaAgua: 'IP68',
      precio: '$1499',
      imagen: 'https://triplex.com.bo/wp-content/uploads/2023/06/iphone-14-pro-max-128-GB.jpg',
      descripcion:
        'Celular premium con gran rendimiento, cámaras de alta calidad y acabado en titanio para una experiencia de gama alta.',
    },
    {
      nombre: 'Samsung Galaxy S24 Ultra',
      marca: 'Samsung',
      modelo: 'SM-S928B',
      sistemaOperativo: 'Android 14',
      almacenamiento: '512 GB',
      ram: '12 GB',
      pantalla: '6.8 pulgadas AMOLED LTPO',
      bateria: '5000 mAh',
      camara: '200 MP + 12 MP + 10 MP + 50 MP',
      procesador: 'Snapdragon 8 Gen 3',
      colores: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'],
      anioLanzamiento: 2024,
      cargaRapida: 'Carga rápida de 45 W',
      resistenciaAgua: 'IP68',
      precio: '$1699',
      imagen: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-S24-Ultra-512GB-US-Version-Unlocked-Android-Smartphone-with-200MP-Camera-8K-Video-Long-Battery-Titanium-Violet_94a2d8dd-e979-46ae-a8e3-9784020753fb.2027d7fcec4b54f556adb89698730e31.jpeg',
      descripcion:
        'Equipo pensado para productividad y fotografía avanzada, con pantalla grande, batería de larga duración y S Pen integrado.',
    },
    {
      nombre: 'Xiaomi 14 Ultra',
      marca: 'Xiaomi',
      modelo: '24030PN60G',
      sistemaOperativo: 'HyperOS',
      almacenamiento: '512 GB',
      ram: '16 GB',
      pantalla: '6.73 pulgadas AMOLED',
      bateria: '5300 mAh',
      camara: '50 MP + 50 MP + 50 MP + 50 MP',
      procesador: 'Snapdragon 8 Gen 3',
      colores: ['Negro', 'Blanco', 'Azul'],
      anioLanzamiento: 2024,
      cargaRapida: 'Carga rápida de 90 W',
      resistenciaAgua: 'IP68',
      precio: '$1399',
      imagen: 'https://m.media-amazon.com/images/I/51kpiJr2INL._AC_SY450_.jpg',
      descripcion:
        'Modelo orientado a la fotografía móvil con sensor principal de alta resolución, gran autonomía y diseño premium.',
    },
    {
      nombre: 'Google Pixel 8 Pro',
      marca: 'Google',
      modelo: 'G1MNW',
      sistemaOperativo: 'Android 14',
      almacenamiento: '256 GB',
      ram: '12 GB',
      pantalla: '6.7 pulgadas LTPO OLED',
      bateria: '5050 mAh',
      camara: '50 MP + 48 MP + 48 MP',
      procesador: 'Google Tensor G3',
      colores: ['Obsidian', 'Porcelain', 'Bay', 'Mint'],
      anioLanzamiento: 2023,
      cargaRapida: 'Carga rápida de 30 W',
      resistenciaAgua: 'IP68',
      precio: '$1199',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kcnDhanzcZ-DqxPu7E2w7KNeMyVB4oIRj9IxmS5OgBKF567AkYvMTM7k&s=10',
      descripcion:
        'Celular con experiencia Android pura, herramientas de inteligencia artificial y cámaras optimizadas por software.',
    },
  ];

  obtenerCelulares(): Celular[] {
    return this.listaCelulares;
  }

  obtenerCelularPorNombre(nombre: string): Celular | undefined {
    const nombreNormalizado = nombre.trim().toLowerCase();

    return this.listaCelulares.find(
      (celular) => celular.nombre.toLowerCase() === nombreNormalizado,
    );
  }
}
