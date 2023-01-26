import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.page.html',
  styleUrls: ['./form2.page.scss'],
})

export class Form2Page {
  /* declaração de atributos da classe */
  public segment = '0';

  public pessoa = {
      nome : '',
      sexo : 'M',
      data : new Date(),
      rg   : '',
      cpf  : ''
  }

  public opcoes = [
      {valor: 'M', descricao: 'Masculino'},
      {valor: 'F', descricao: 'Feminino'}
  ]

  /* utilizado para o exercício (MA) */
  public opcoesPatrimonio = [
    { descricao: 'Casa própria'       ,    check: true  },
    { descricao: 'Apartamento próprio',    check: false },
    { descricao: 'Carro próprio'      ,    check: false },
    { descricao: 'Terreno próprio'    ,    check: false }
  ];

  public opcoesEscolaridade = [
    { descricao: 'Ensino médio completo' ,    check: false  },
    { descricao: 'Graduação'             ,    check: false },
    { descricao: 'Mestrado'              ,    check: false },
    { descricao: 'Doutorado'             ,    check: false }
  ];
  /* --- */

  /* --- fim da declaração --- */

  /* injeção de dependência no construtor
     utilizar objetos sem a necessidade de inicializa-los 
  */
     constructor(private alertCtrl: AlertController,
      private toastCtrl: ToastController,
      private modalCtrl: ModalController) {}
  

  /* métodos da classe */
  /* podem conter os modificadores de acesso (private, public e entre outros.) */
  limpar(){
    this.pessoa = {
        nome : '',
        sexo : 'M',
        data : new Date(),
        rg   : '',
        cpf  : ''
    }

    /* parte do exercício (MA) */
    for(let item of this.opcoesPatrimonio){
      item.check = false;
    }

    for(let item of this.opcoesEscolaridade){
      item.check = false;
    }
    /* --- */
  }

  change(){
      console.log(this.segment)
  }

  async salvar(){
      const alert = await this.alertCtrl.create({
          message : 'Deseja salvar uma pessoa?',
          buttons : [
              {
                  text : 'Não',
                  role : 'cancel',
                  handler : (data) => {}
              }, {
                  text : 'Sim',
                  handler : (data) => {
                      this.salvaPessoa();
                  }
              }
          ]
      });

      await alert.present();
  }

  async salvaPessoa(){
      if(this.pessoa.nome == ''){
          alert('O nome da pessoa precisa ser informado!');
      } else {

          let toast = await this.toastCtrl.create({
              message : 'Pessoa cadastrada com sucesso',
              duration: 2000,
              position: 'bottom'
          });

          toast.present();
      }
  }

}
