import { Component, OnInit } from '@angular/core';
//import { Produto } from './models/database.model';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {
  // obj   : tipo    = inicializador;
  //produto: Produto = this.global.initProduto();

  constructor(
    // private db: DataBaseService,
    // public global: ServicoGlobal
  ) { }

  ngOnInit(): void {
  }

  salvar () {
    //this.db.registrarProduto(produto);
  }

}
