/* Quando eu clicar no botão converter, quero pegar o 
numero binario digitado no input bin e converter para 
decimal e incluir o resultado dentro do input dec */
function convert() {
    let bin = document.querySelector('#bin')
    let dec = document.querySelector('#dec')

    if ((bin.value === '')) {
        alert('Por favor, informe o número 0 ou 1')
    } else {
        const convert = parseInt((bin.value), 2)
        if (isNaN(convert)) {
            alert('Por favor, informe o número 0 ou 1')
            dec.value = ''
        } else {
            dec.value = convert
        }
      
    }
}
