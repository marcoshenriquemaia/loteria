const $try = document.querySelector('.try')
const $spent = document.querySelector('.spent')
const $numerList = document.querySelectorAll('.number')
const $buttonPlay = document.querySelector('.button-start')

let spent = 0
let attempts = 0

const winnerNumbers = [12, 15, 23, 32, 33, 46]

const play = () => {
  const myPlay = generateUniqueNumbers()

  if (equalList(myPlay, winnerNumbers)) return alert(`VOCÊ GANHOU. Tentativa: ${attempts}. Gastos: R$${spent.toLocaleString('pt-BR')}`)
  
  spent+=4.5
  attempts++

  console.log(`ERROU: R$${spent.toLocaleString('pt-BR')}. Tentativa nº${attempts}. Jogada: ${myPlay}`)

  $try.textContent = attempts
  $spent.textContent = `R$${spent.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}`
  myPlay.forEach((item, index) => {
    $numerList[index].textContent = item
  })

  setTimeout(play, 1)
} 

const generateUniqueNumbers = () => {
  const numberList = []

  while(numberList.length < 6) {
    const randomNumber = Math.floor(Math.random() * 60) + 1

    if (!numberList.includes(randomNumber)) numberList.push(randomNumber)
  }

  return numberList.sort((a,b) => a - b)
}

const equalList = (array1, array2) => {
  if (array1.every(item => array2.includes(item))) return true
  return false
}

$buttonPlay.addEventListener('click', play)