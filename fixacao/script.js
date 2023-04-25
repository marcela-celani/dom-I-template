// imprimir 'p' no console
const lerP = document.getElementById('paragrafo').innerHTML
console.log(lerP)

// o que for escrito no input, aparecer no console
const imprimeValor = () => {
    const valor = document.getElementById('texto').value
    console.log(valor)
}

// ao clicar no botão, o que tá escrito vai para o p
const substituiValor = () => {
    document.getElementById('paragrafo').innerHTML = document.getElementById('texto').value
}
