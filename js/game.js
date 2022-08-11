const grid = document.querySelector(".grid")

const listaPersonagens = ["beth", "jerry", "jessica", "morty", "pessoa-passaro", "pickle-rick", "rick", "summer", "meeseeks", "scroopy"]

let firstCard = ""
let secondCard = ""

function creatElement(tag, classNome){
    const element = document.createElement(tag)
    element.className = classNome
    return element
}


function checkFimJogo(){
    const cartasInativadas = document.querySelectorAll(".card-inativada")

    if(cartasInativadas.length == 20){
        setTimeout(()=>{
           alert("Parabéns! Fim de jogo !") 
        },600)
    }
} 

function revelaCarta(event){
    const card = event.target.parentNode

    if(card.className.includes("reveal-card")){
        return
    }

    if(firstCard == ""){
        firstCard = card
        firstCard.classList.add("revela-carta") 
    } else if(secondCard == ""){
        secondCard = card
        secondCard.classList.add("revela-carta")

        checkCards()
    }

    
}

function checkCards(){
    const firstPersonagem = firstCard.getAttribute("data-personagem")
    const secondPersonagem = secondCard.getAttribute("data-personagem")

    if(firstPersonagem == secondPersonagem){

        firstCard.firstChild.classList.add("card-inativada")
        secondCard.firstChild.classList.add("card-inativada")

        firstCard = ""
        secondCard = ""

        checkFimJogo()

    }else{

        setTimeout(()=>{
            firstCard.classList.remove("revela-carta")
            secondCard.classList.remove("revela-carta")

            firstCard = ""
            secondCard = ""
        },600)

        
    } 
}

























function creatCard (personagem){

    const card = creatElement("div", "card")
    const front = creatElement("div", "face front")
    const back = creatElement("div", "face back")

    front.style.backgroundImage = `url("../img/${personagem}.png")`

    card.append(front, back)

    card.addEventListener("click",revelaCarta)

    card.setAttribute("data-personagem",personagem)
    return card
}

function listarCartas (lista){

    const duplicateLista = [...lista, ...lista]

    const listaSortida = duplicateLista.sort(() => Math.random()-0.5)

    listaSortida.forEach((personagem)=>{
        const card = creatCard(personagem)
        grid.append(card)
    })
}

listarCartas(listaPersonagens)


