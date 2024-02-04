const inputFields = document.querySelectorAll('input')
const button = document.querySelector('button')

window.onload = () => inputFields[0].focus()

inputFields.forEach((input)=>{
    input.addEventListener('input', ()=>{
        const currentVal = input
        const nextVal = currentVal.nextElementSibling

        if(currentVal.value.length > 1 && currentVal.value.length ==2){
            currentVal.value =""
        }

        if(nextVal !== null && nextVal.hasAttribute('disabled') && currentVal.value !== ""){
            nextVal.removeAttribute('disabled')
            nextVal.focus()
        }
        if(!inputFields[3].disabled && inputFields[3].value !== "")
        {
            button.classList.add("active")  
        }
        else{
            button.classList.remove("active")
        }
        
    })

   

    input.addEventListener('keyup',(e)=>{
        if(e.key == "Backspace"){
        if(input.previousElementSibling !== null){
            e.target.value = ""
            e.target.setAttribute('disabled', true)
            input.previousElementSibling.focus()
        }
        
          
        }
    })
})