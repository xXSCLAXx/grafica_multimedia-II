import { Component, signal } from '@angular/core';
import {Figura} from './components/figura/figura';

@Component({
  selector: 'app-root',
  imports: [Figura],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
