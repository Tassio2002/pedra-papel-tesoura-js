const stone1 = document.getElementById('stone-1')
const stone2 = document.getElementById('stone-2')
const paper1 = document.getElementById('paper-1')
const paper2 = document.getElementById('paper-2')
const scissors1 = document.getElementById('scissors-1')
const scissors2 = document.getElementById('scissors-2')
const table1 = document.getElementById('table-1')
const table2 = document.getElementById('table-2')
//Criar um array para os styles das tables
table1.style.width = '75%'
table1.style.display = 'flex'
table1.style.justifyContent = 'center'
table1.style.alignItems = 'center'
table2.style.width = '75%'
table2.style.display = 'flex'
table2.style.justifyContent = 'center'
table2.style.alignItems = 'center'

//Não permite que mais de um elemento seja adicionado a tela
function cleanTable1 () {
    const table1QTD = table1.children.length
    if (table1QTD > 1) {
        table1.removeChild(table1.childNodes[0])
    }
}

function cleanTable2 () {
    const table2QTD = table2.children.length
    if (table2QTD > 1) {
        table2.removeChild(table2.childNodes[0])
    }
}

stone1.addEventListener('click', function () {
    let renderStone1 = document.createElement('img')
    renderStone1.src = './assets/pedra.png'
    renderStone1.style.width = '200px'
    table1.appendChild(renderStone1)
    cleanTable1()
})

stone2.addEventListener('click', function () {
    let renderStone2 = document.createElement('img')
    renderStone2.src = './assets/pedra.png'
    renderStone2.style.width = '200px'
    table2.appendChild(renderStone2)
    cleanTable2()
})

paper1.addEventListener('click', function () {
    let renderPaper1 = document.createElement('img')
    renderPaper1.src = './assets/papel.png'
    renderPaper1.style.width = '200px'
    table1.appendChild(renderPaper1)
    cleanTable1()
})

paper2.addEventListener('click', function () {
    let renderPaper2 = document.createElement('img')
    renderPaper2.src = './assets/papel.png'
    renderPaper2.style.width = '200px'
    table2.appendChild(renderPaper2)
    cleanTable2()
})

scissors1.addEventListener('click', function () {
    let renderScissors1 = document.createElement('img')
    renderScissors1.src = './assets/tesoura.png'
    renderScissors1.style.width = '200px'
    table1.appendChild(renderScissors1)
    cleanTable1()
})

scissors2.addEventListener('click', function () {
    let renderScissors2 = document.createElement('img')
    renderScissors2.src = './assets/tesoura.png'
    renderScissors2.style.width = '200px'
    table2.appendChild(renderScissors2)
    cleanTable2()
})

//1- Ao clicar em um dos elementos, uma imagem daquele elemento deve aparecer na div table
//2- Permitir apenas uma imagem por table