import { Component } from '@angular/core';
import {Pokemon} from '../types/pokemon';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  pokemones: Array<Pokemon> = [
    { nombre: "Pikachu", tipo: "Eléctrico" },
    { nombre: "Charmander", tipo: "Fuego" },
    { nombre: "Squirtle", tipo: "Agua" },
    { nombre: "Bulbasaur", tipo: "Planta, Veneno" }
  ];

  newPokemon: Pokemon = { nombre: '', tipo: '' };

  addPokemon() {
    if (this.newPokemon.nombre && this.newPokemon.tipo) {
      this.pokemones.push({ ...this.newPokemon });
      this.newPokemon = { nombre: '', tipo: '' };
    }
  }

  deletePokemon(nombre: string) {
    this.pokemones = this.pokemones.filter(pokemon => pokemon.nombre !== nombre);
  }
}
