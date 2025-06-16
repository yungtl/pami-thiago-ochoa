//Função que retorna tipo 
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
 }
 
 console.log(saudacao('Leandro'));
 
 //Interface para obejeto Usuario
 interface Usuario {
     nome: string;
     idade: number;
     email?: string //opcional
 }
 
 //Utilizando a interface usuario fica assim:
 function exibirUsuario(usuario: Usuario): void {
     console.log(`Nome: ${usuario.nome}`);
     console.log(`Idade: ${usuario.idade}`);
 }
 
 exibirUsuario({ nome: `Marcos`, idade: 22});
 
 //Exemplo de uma função que retorna arrays e tem parametro opcionais
 function listarNomes(nomes: string[]): void{
     nomes.forEach(nome => console.log(nome));
 }
 
 listarNomes([`Ana,´Bruno`, `Carlos`]);
 
 
 