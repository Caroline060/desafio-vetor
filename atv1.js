/*
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Nome: Nathália Caroline Gumbio
*/
//indice       0              1              2              3             4            5        6 
var semana = new Array("segunda-feira", "ter\u00E7a-feira", "quartas-feiras", "quinta-feira", "sexta-feira", "s\u00E1bados", "domingos");
//indice       0           1           2              3                 4                 5                   6 
var hobby = new Array("jogar vol\u00EAi", "ler livros", "cozinhar", "assistir s\u00E9ries", "aula de patina\u00E7\u00E3o", "sair com amigos", "igreja");
console.log("Eu gosto de come\u00E7ar minhas semanas com alguma atividade f\u00EDsica, \npor isso na ".concat(semana[0], " eu costumo ").concat(hobby[0], ". J\u00E1 de ").concat(semana[1], " prefiro ").concat(hobby[1], " para \ndesacansar um pouco. Nas ").concat(semana[2], " geralmente testo receitas novas, por isso gosto de ").concat(hobby[2], ".\nPara na ").concat(semana[3], " ").concat(hobby[3], " comendo o que preparei no dia anterior. J\u00E1 na ").concat(semana[4], " tenho ").concat(hobby[4], "\ne preciso descansar um pouco mais. Ent\u00E3o aos ").concat(semana[5], " gosto de ").concat(hobby[5], " para descontrair e colocar a conversa\nem dia. Para fechar a semana aos ").concat(semana[6], " vou a ").concat(hobby[6], "."));
