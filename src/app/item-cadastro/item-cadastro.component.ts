import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [
    {etiqueta: 'AA1234', descricao: 'Notebook', data_aquisicao: new Date()},
    {etiqueta: 'BB9876', descricao: 'Mouse', data_aquisicao: new Date()}
  ];

  constructor() { }

  ngOnInit() {
  }

}
