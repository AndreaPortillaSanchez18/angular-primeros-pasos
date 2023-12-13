import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: string = 'ironMan';
public age:  number = 35;

get capitalizedName (): string {
  return this.name.toUpperCase();
}

getHeroDescription():string{

return `${this.name} - ${this.age}`;
}

public changeName():void{

  this.name = 'Spiderman';
}

public changeAge():void{

  this.age = 50;
}


public resetForm():void{
   this.name= 'ironMan'
   this.age = 45;
}
}
