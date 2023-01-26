import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/*
   TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. 
   É um superconjunto sintático estrito de JavaScript e adiciona 
   tipagem estática opcional à linguagem.

   Estilo de tipagem: estática (opcional); forte.
*/
export class HomePage {
  /* variaveis */
  public a : number;
  public b : number;
  public c : number;

  /* objetos */
  public obj = {
    nome : 'aula TypeScript',
    ano  : 2023
  }

  /* lista */
  public lista = ['julio', 'saulo', 'bruna'];


  constructor() {
    /* executado primeiro */
    console.log('Bem vindo');
    alert('Bem vindo');

    /* variaveis */
    this.a = 10;
    this.b = 5;
    console.log(this.a + this.b);

    /* objetos */
    console.log(this.obj.ano + this.obj.nome);

    /* listas */
    for(let i = 0; i < this.lista.length; i++){
      console.log(this.lista[i]);
    }

    /* listas */
    /* cuidado com o undefined!!! */
    this.lista.forEach((element, index) => {
      console.log(index)
    });

  }

  public listarNomes(){
    /* listas */
    for(let i = 0; i < this.lista.length; i++){
      console.log(this.lista[i]);
    }
  }
}
