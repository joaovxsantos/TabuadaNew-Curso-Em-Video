let submit = document.querySelector('#submit')
let valor = document.querySelector('#valor')


function account() {

    let valor = document.querySelector('#valor').value
    let resultado = document.querySelector('#p2')

    if (!valor) {
        alert('Digite um número!')
    } else {
        resultado.innerText = ""
        for (i = 0; i <= 10; i++) {
            resultado.innerText += `${valor} x ${i} = ${valor * i}\n`
        }
    }
}

valor.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        account()
    }
})

submit.addEventListener('click', account)