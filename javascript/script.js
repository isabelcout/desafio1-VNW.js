
// 1 - Exercício

let hora = 19;
let dia;

if (hora >= 6 && hora < 18) {
    dia = "claro";
} else {
    dia = "de noite";
}

console.log(`Está ${dia}`);

// 2 - Exercício

for (let contador = 0; contador <=20; contador +=2){
    console.log(contador);
}

// 3 - Exercício

function minhaFuncao() {
    console.log("Minha primeira função");
}

minhaFuncao();

// 4 - Exercício

function meuNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

meuNome("Isabel Coutinho");

// 5 - Exercício

function meusDados(nome, idade, estilo) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e meu estilo musical favorito é ${estilo}`);
}

meusDados("Isabel Coutinho", 21, "Indie Alternativo!");

// 6 - Exercício

function gosto(filme, musica){
    console.log(`Meu filme favorito é ${filme} e minha música favorita é ${musica}`);
}

gosto("Harry Potter", "Enjoy The Silence");

// 7 - Exercício

function number(triplo){
return triplo*3;
}
console.log(`O Triplo desse número é ${number(25)}`);

// 8 - Exercício

function boolean(variable) {
    if (variable === true) {
      return "A variável é verdadeira.";
    } else if (variable === false) {
      return "A variável é falsa.";
    } else {
      return "A variável não é um valor booleano";
    }
  }
  console.log(boolean(true));
  console.log(boolean(false));
  console.log(boolean(0));

// 9 - Exercício

  let melhoresFilmes = ["Harry Potter", " Star Wars", " O Senhor dos Anéis", " Matrix", " Avatar"];

  console.log(`Os melhores filmes são ${melhoresFilmes}`);

// 10 - Exercício

let comidas = ["Pizza","Churrasco","Hambúrguer"];

comidas.unshift("Batata Frita");
console.log(comidas);

// 11 - Exercício

let sorvetes = ["Chocolate","Flocos","Amendoim"];

sorvetes.pop();
console.log(sorvetes);


// 12 - Exercício

let refrigerantes = ["Sukita","Guaraná","Pepsi"];

refrigerantes.push("Coca-Cola", "Fanta");
console.log(refrigerantes);

// 13 - Exercício

let sucos = ["Acerola","Cupuaçu","Maracujá"];

sucos.shift();
console.log(sucos);


  