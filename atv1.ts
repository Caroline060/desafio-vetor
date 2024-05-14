/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Nome: Nathália Caroline Gumbio
*/

                     //indice       0              1              2              3             4            5        6 
let semana = new Array(`segunda-feira`,`terça-feira`,`quartas-feiras`,`quinta-feira`,`sexta-feira`,`sábados`,`domingos`);
                     //indice       0           1           2              3                 4                 5                   6 
let hobby = new Array(`jogar volêi`,`ler livros`,`cozinhar`,`assistir séries`,`aula de patinação`,`sair com amigos`,`igreja`);

console.log(`Eu gosto de começar minhas semanas com alguma atividade física, 
por isso na ${semana[0]} eu costumo ${hobby[0]}. Já de ${semana[1]} prefiro ${hobby[1]} para 
desacansar um pouco. Nas ${semana[2]} geralmente testo receitas novas, por isso gosto de ${hobby[2]}.
Para na ${semana[3]} ${hobby[3]} comendo o que preparei no dia anterior. Já na ${semana[4]} tenho ${hobby[4]}
e preciso descansar um pouco mais. Então aos ${semana[5]} gosto de ${hobby[5]} para descontrair e colocar a conversa
em dia. Para fechar a semana aos ${semana[6]} vou a ${hobby[6]}.`)

