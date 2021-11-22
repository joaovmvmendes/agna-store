import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';
import { Addprodsheet } from './visualizar-produto/visualizar-produto.component';
import { ConfirmaDadosDialogComponent } from './carrinho/carrinho.component';
import { FeedComponent } from './feed/feed.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarProdutoComponent,
    ConfirmaDadosDialogComponent,
    FeedComponent,
    Addprodsheet,
    CarrinhoComponent,
    CadastrarProdutoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
