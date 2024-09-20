const form = document.getElementById('form')
const calcular = document.getElementById('botao-enviar')

form.addEventListener('submit', function(e){
    e.preventDefault()

const numeroA = Number(document.getElementById ('numero-a').value)
const numeroB = Number(document.getElementById('numero-b').value)

const mensagemErro = `Formulário inválido! O número ${numeroB} deve ser maior que o ${numeroA}.`
const mensagemSucesso = `Formulário válido! O ${numeroB} é maior que o ${numeroA}.`

function calcular (){

    return numeroB > numeroA
    
}

if(calcular()){ 
    const containerMensagemSucesso = document.querySelector('#mensagem-sucesso')
       containerMensagemSucesso.innerHTML = mensagemSucesso
       containerMensagemSucesso.style.display = 'block'

       const containerMensagemErro = document.querySelector('#mensagem-erro');
        containerMensagemErro.style.display = 'none';
   
   } else{
    const containerMensagemErro = document.querySelector('#mensagem-erro')
       containerMensagemErro.innerHTML = mensagemErro
       containerMensagemErro.style.display = 'block'

       const containerMensagemSucesso = document.querySelector('#mensagem-sucesso');
        containerMensagemSucesso.style.display = 'none';
   }
   })
