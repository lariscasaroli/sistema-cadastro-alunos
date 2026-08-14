// ================================================== 
// SELECIONA OS ELEMENTOS DO HTML 
// ================================================== 
const formulario = document.getElementById("formAluno"); 
const campoNome = document.getElementById("nome"); 
const campoEmail = document.getElementById("email"); 
const listaAlunos = document.getElementById("listaAlunos"); 
// ================================================== 
// EVENTO DE SUBMISSÃO DO FORMULÁRIO 
// ================================================== 
formulario.addEventListener("submit", cadastrarAluno); 
// ================================================== 
// FUNÇÃO DE CADASTRO 
// ================================================== 
function cadastrarAluno(event) { 
// Impede o navegador de recarregar a página 
event.preventDefault(); 
// Obtém os valores dos campos 
const nome = campoNome.value; 
const email = campoEmail.value; 
// Cria um novo elemento de lista 
const aluno = document.createElement("li"); 
// Insere as informações do aluno 
aluno.textContent = `${nome} - ${email}`; 
// Adiciona o aluno na lista 
listaAlunos.appendChild(aluno); 
// Limpa o formulário 
formulario.reset(); 
}