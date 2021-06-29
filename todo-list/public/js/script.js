// Variáveis necessárias
const inputTarefa = document.querySelector("#tarefas")
const output = document.querySelector(".output ul")
const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || []
const tarefasLista = document.querySelector('#tarefasLista')
const tarefasConcluidas = document.querySelector('#tarefasConcluidas')

// Atualiza a tela com os dados dos arrays
function atualizaTela() {
    // Antes de executar toda a função, eu limpo a lsta
    output.innerHTML = ""

    // Adicionando todos os itens do array na minha lista
    tarefas.forEach((item)=> {
        const li = document.createElement('li')
        const textLi = document.createTextNode(item)
        li.appendChild(textLi)
        output.appendChild(li)

        const span = document.createElement('span')
        const icon = document.createElement('i')
        li.appendChild(span)
        span.appendChild(icon)

        icon.setAttribute('class', 'icone fas fa-times-circle')
        li.setAttribute('title', 'Marcar como concluída')

        li.addEventListener('click', ()=> {
            const confirmation = confirm("Deseja marcar sua tarefa como concluída?")
            if (confirmation) {
                output.removeChild(li)
                removendoTarefas(item)
                listaConcluida.push(item)
                atualizaListaConcluida()
               
                
             // Informando quantos itens tem no array
             tarefasLista.innerHTML = tarefas.length
            }     
        })
        li.addEventListener('mouseover',()=>{
            icon.style.visibility = 'visible'
        })
        li.addEventListener('mouseout',()=> {
            icon.style.visibility = 'hidden'
        })
    })

    // Informando quantos itens tem no array
    tarefasLista.innerHTML = tarefas.length

    // Ao executar todas as funções, ele limpa o campo
    inputTarefa.value = ''

}
atualizaTela()

// Função resposável por validar o input e executar todo o código
function execute(event) {
      // Previndo a ação padrão do callback
      event.preventDefault()

    // O código só vai funcionar, se o input estiver preenchido
       // Senão, ele mostra um alert e não adiciona nada a lista
       if ((inputTarefa.value !== "")) {
           let novaTarefa = inputTarefa.value
           tarefas.push(novaTarefa)
   
           inputTarefa.value = ""
   
           saveDateStorageTarefas() 
       } else {
           alert("Informe uma tarefa e tente novamente!")
       }
    atualizaTela()

}

// Função resposável por remover itens de uma array
function removendoTarefas(valor) {
    // Remover o item do array
    tarefas.splice(tarefas.indexOf(valor.textContent), 1)

    atualizaTela()

    saveDateStorageTarefas()
}

// Salvando o array TAREFAS no localStorage
function saveDateStorageTarefas() {
    // Todo navegador web possui um bancos de dados
    localStorage.setItem('Tarefas', JSON.stringify(tarefas))
}


const button = document.querySelector("#cadastrar")
button.addEventListener("click", execute)

// Modais
const ModalInfo = {
    locationDOM: document.querySelector("#modal"),
    toggleMenu() {
        this.locationDOM.classList.toggle('ativo')
    }
}