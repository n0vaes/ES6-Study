// // exercicio 1

// class Usuario {
//     constructor() {
//         this.email = "";
//         this.senha = "";
//         this.admin = false;
//     }
//     isAdmin() {
//         if (this.admin === true) {
//             return ('Usuario é Admin');
//         }
//         else {
//             return ('Usuario não é Admin');
//         }
//     }
// }

// class Admin extends Usuario {
//     constructor() {
//         super();
//         this.admin = true;
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');



// console.log('Ex1');
// console.log(User1.isAdmin()); // false
// console.log(Adm1.isAdmin()); // true

// // exercicio 2

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

// const mapUsuario = usuarios.map(function(itemMap) {
//     return itemMap.idade;
// });

// const filtraUsuario = usuarios.filter(function(itemFilter) {
//     if (itemFilter.empresa === 'Rocketseat' && 
//         itemFilter.idade >= 18) {
//         return itemFilter;
//         }
// });

// const findUsuario = usuarios.find(function(itemFind) {
//     return itemFind.empresa === 'Google';
// });

// const joinUsuario = usuarios.filter(function(itemJoin) {
//     itemJoin.idade = itemJoin.idade *2;
//     if (itemJoin.idade <= 50) {
//         return itemJoin;
//     }
// });

// console.log('Ex2.1');
// console.log(mapUsuario);
// console.log('Ex2.2');
// console.log(filtraUsuario);
// console.log('Ex2.3');
// console.log(findUsuario);
// console.log('Ex2.4');
// console.log(joinUsuario);

// // Exercicio 3

// // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(item => item + 10);
// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = usuario => usuario.idade; 

// console.log(mostraIdade(usuario));
// // 3.3
// // Dica: Utilize uma constante pra function
// const nome1 = "Diego";
// const idade = 23;
// const mostraUsuario = (nome1 = 'Diego', idade = 18) => ({ nome1, idade });

// console.log(mostraUsuario(nome1, idade));
// console.log(mostraUsuario(nome1));

// // 3.4
// const promise = () => (
//  new Promise((resolve, reject) => resolve()));

// console.log('promise/resolve ok');

// //exercicio 4
// //4.1
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
// };

// const { nome, endereco: { cidade, estado} } = empresa;

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// //4.2
// function mostraInfo({nome, idade}) {
//     return `${nome} tem ${idade} anos.`;
//    }
//    console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// //exercicio 5
// //5.1
// const arr2 = [1, 2, 3, 4, 5, 6]

// const [x, ...y] = arr2;
// console.log(x)
// console.log(y)

// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3


// //5.2
// const usuario1 = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//     }
// };

// const usuario2 = { ...usuario1, nome: 'Gabriel' };
// const usuario3 = { ...usuario1, endereco: {...usuario1.endereco, cidade:'Lontras'}};

// console.log(usuario2);
// console.log(usuario3);

// //exercicio 6

// const usuarioEx6 = 'Diego';
// const idadeEx6 = 23;
// console.log(`O usuario ${usuarioEx6} possui ${idadeEx6} anos`);

// //exercicio 7

// const nomeEx7 = 'Diego';
// const idadeEx7 = 23;
// const usuarioEx7 = {
//  nomeEx7,
//  idadeEx7,
//  cidade: 'Rio do Sul',
// };

// console.log(usuarioEx7);

//modulo 2

//ex 1.1

//import Usuario, { idade as IdadeUsuario }  from './functions';
//import ClasseUsuario from './functions';
//import { idade } from './functions';

//Usuario.informacao();
//console.log(IdadeUsuario);

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response);
        } catch (err) {
            console.warn('Erro na requisicao');
        }
    }
}

Api.getUserInfo('diego3d');