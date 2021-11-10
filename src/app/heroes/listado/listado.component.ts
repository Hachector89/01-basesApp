import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroesBorrados: string[] = [];

  borrarHeroe(){

    const heroeBorrado: string  = this.heroes.shift()!;

    if(heroeBorrado){
      this.heroesBorrados.push(heroeBorrado);
    }    

  }



}
