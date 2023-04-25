// cada vez que clicar no botao, ele conta quantas vezes clicou.

let contador = 0

// função que é chamada no evento onclick na tag button.
const contaClique = () => {
    contador += 1
    console.log(`o botão foi clicado ${contador} vezes.`)
}