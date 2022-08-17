const cor = [
    'red',
    'green',
    'blue',
    'violet',
    'yellow',
    'greenyellow',
    'gray',
    'brown',
    'pink',
    'orange'
]

const button = document.querySelector('button#changeColor')
button?.addEventListener('click', changeBackGroundColor)

function changeBackGroundColor() {
    const novaCor = cor[Math.floor(Math.random() * cor.length)]
    document.querySelector('main').style.backgroundColor = novaCor
    const textColorName = document.querySelector('#colorName')
    textColorName.textContent =
        novaCor.charAt(0).toUpperCase() + novaCor.slice(1)
    textColorName.style.color = novaCor
}

const hexButton = document.querySelector('button#changeHexColor')
hexButton?.addEventListener('click', changeBackGroundHexColor)

function generateHexColor() {
    let novaCor = '#'
    const hexCaracteres = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
    ]

    let contador = 0

    while (contador < 6) {
        novaCor =
            novaCor +
            hexCaracteres[Math.floor(Math.random() * hexCaracteres.length)]
        contador++
    }
    return novaCor
}

function changeBackGroundHexColor() {
    let novaCor = generateHexColor()
    document.querySelector('main').style.backgroundColor = novaCor
    const textColorName = document.querySelector('#colorName')
    textColorName.textContent = novaCor.toUpperCase()
    textColorName.style.color = novaCor
}

function createColorsPalete() {
    const colorsPalete = document.querySelectorAll('.cor')
    for (let elemento = 0; elemento < colorsPalete.length; elemento++) {
        let novaCor = generateHexColor()

        colorsPalete[elemento].style.backgroundColor = novaCor
        colorsPalete[elemento].firstElementChild.textContent =
            novaCor.toUpperCase()
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
        createColorsPalete()
    }
})

window.addEventListener('load', createColorsPalete)
