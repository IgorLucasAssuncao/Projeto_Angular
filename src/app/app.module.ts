import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// @NgModule é um decorador que define um módulo Angular
@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
/**
 * módulo principal da aplicação
 * @declaration : Essa propriedade é usada para declarar os componentes, diretivas e pipes que fazem parte do módulo. 
 * Isso significa que, ao declarar um componente nessa propriedade, ele pode ser utilizado em outros componentes ou templates da aplicação.
 * 
 * @imports : Essa propriedade é usada para importar outros módulos
 *  que serão usados na aplicação. Por exemplo, o BrowserModule é um módulo que precisa ser importado para executar a aplicação em um navegador web.
 * 
 * @providers : Essa propriedade é usada para definir os serviços que serão injetados nos componentes da aplicação.
 *  Os serviços são classes que fornecem funcionalidades específicas para a aplicação, como acesso a APIs externas ou manipulação de dados.
 * 
 * @bootstrap : Essa propriedade é usada para definir o componente que será inicializado quando a aplicação for executada.
 */
export class AppModule { }
