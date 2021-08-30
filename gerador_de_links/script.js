/* Objetivo do projeto: Desenvolver uma aplicação que recebe
o número de telefone da pessoa e a mensagem a ser enviada, e 
quando ela apertar no botão GERAR, apareça um link da api de 
envio de mensagens do whatsapp com o número da pessoa e com a
mensagem a ser escrita.
- A mensagem não pode haver espaços entre as palavras, pois não
é aceito nas urls, é recomendado substituir por '%20'
*/
const output = document.querySelector(".output")

// As duas funções abaixo são para formatar os dados dos inputs
function formatTel(tel) {
    const noParenthesesStart = tel.trim().split('(').join('')
    const noParenthesesEnd = noParenthesesStart.split(')').join('')
    const noBars = noParenthesesEnd.split('-').join('')
    const final = noBars.split(' ').join('')
    return final
}

function formatText(string) {
    const stringFormat = string.trim().split(' ').join('%20');
    return stringFormat;
}

// Função responsável por gerar o link
function gerarLink() {
    const tel = document.querySelector('#num').value
    const msg = document.querySelector('#msg').value

    const link = `https://api.whatsapp.com/send?phone=55${formatTel(tel)}&text=${formatText(msg)}`

    output.innerHTML = `
        <a href="${link}" target="_blank">${link}</a>
        <p> Pronto! Agora copie e cole no seu navegador e compartilhe com seus amigos </p>
    `
}

const btn = document.querySelector('#gerar');
btn.addEventListener('click', gerarLink)


/* const htmlText = `<div>O melhor item</div> <div>A melhor lista</div>`
const htmlArray = htmlText.split('div') 
const novoHtml = htmlArray.join('section')

console.log(htmlArray, novoHtml) */