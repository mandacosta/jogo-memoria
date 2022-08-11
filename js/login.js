const input = document.querySelector(".login__input")
const button = document.querySelector(".login__button")
const form = document.querySelector(".login-form")

eventoInput()
enviarSubmit()


function eventoInput (){
   input.addEventListener("input", (e)=>{
    if(e.target.value.length >= 3){
        button.removeAttribute("disabled")
    } else{
        button.setAttribute("disabled","")
    }
}) 
}



function enviarSubmit(){
    form.addEventListener("submit",(e)=>{
        e.preventDefault()

        localStorage.setItem("player",input.value)

        window.location = "pages/game.html"
    })
}
    




