const numeroA = Number(document.getElementById ('numero-a').value)
const numeroB = Number(document.getElementById('numero-b').value)
const calcular = document.getElementById('botao-enviar')
const mensagemErro = `Formulário inválido! O número ${numeroB.value} deve ser maior que o ${numeroA.value}.`
const mensagemSucesso = `Formulário válido! O ${numeroB.value} é maior que o ${numeroA.value}.`


function calcular (numero){

    numero= numeroB.value > numeroA.value
    return numero
}
form.addEventListener('subimit', function(e){
    e.preventDefault()


if(calcular()){ 
    const containerMensagemSucesso = document.querySelector('#mensagem-sucesso')
       containerMensagemSucesso.innerHTML = mensagemSucesso
       containerMensagemSucesso.style.display = 'block'
   
   } else{
    const containerMensagemErro = document.querySelector('#mensagem-erro')
       containerMensagemErro.innerHTML = mensagemErro
       containerMensagemErro.style.display = 'block'
   }
   })
