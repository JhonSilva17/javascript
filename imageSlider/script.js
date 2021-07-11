const imagens = document.querySelectorAll('.item')
const lengthImg = imagens.length
let index = 0
// iniciando com o primeiro item com a classe 'active'
imagens[0].classList.add('active')

// Ativa o slider image
function sliderImage() {
    // 1- Toda vez que a função for chamada, o index será somado mais 1
    index++

    // 2 - Remove toda classe 'active' dos itens anteriores (para evitar que apareça todos os itens, a cada clique)
    imagens.forEach((item) => {
        item.classList.remove('active')
    })

    // 3- Se o 'index' for maior ou igual a quantidade de imagens, quero zerar o index para começar tudo de novo
    if (index >= lengthImg) {
        index = 0
    }

    // 4 - Adiciono a classe 'active' a imagem que está relacionada ao 'index'
    imagens[index].classList.add('active')
}

setInterval(sliderImage, 2000)