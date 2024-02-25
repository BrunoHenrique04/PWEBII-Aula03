import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Apresentacao';
  protected readonly onchange = onchange;

  ngAfterViewInit() { //executa o codigo quando o documento carregar
    console.log('Script executado!'); // verificar se o script esta executando
    let cur1 = document.getElementById("cu1") // pega o elemento do primeiro curriculo
    let cur2 = document.getElementById("cu2") // pega o elemento do segundo curriculo
    console.log(cur1, cur2); // testa se os elementos foram pegos corretamente
    let opSelector = document.getElementById("opcoes") //pega as informações do selector

    opSelector?.addEventListener("change", (event) => { //se o selector trocar ira executar a arrow function
      console.log("TROCOU DE OPÇÃO") // testa se a função executou corretamente
      let curriculo = (opSelector as HTMLSelectElement).value; //deixa esplicito que opSelector é um elemento de seletor HTML
      if (curriculo === "1" ) { //se curriculo for igual 1 exibe o primeiro curriculo
        console.log("curriculo 1 exibido")
        cur1?.classList.remove("none");
        cur2?.classList.add("none");
        console.log(cur1, cur2);  //se curriculo for igual 2 exibe o segundo curriculo
      } else  {
        console.log("curriculo 2 exibido")
        cur2?.classList.remove("none");
        cur1?.classList.add("none");
        console.log(cur1, cur2);

      }

    })

  }
}

