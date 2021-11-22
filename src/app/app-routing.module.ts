import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';
import { FeedComponent } from './feed/feed.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {component: VisualizarProdutoComponent, path: 'produto'},
  {component: CarrinhoComponent, path: 'carrinho'},
  {component: FeedComponent, path: ''},
  {component: CadastrarProdutoComponent, path: 'cadprod'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
