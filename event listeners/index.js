function div1Click(){
    alert("Div 1 clicked")
}

function btn1Click(){
    alert("Button 1 clicked")
}

const div2 = document.getElementById("div2");
const btn2 = document.getElementById("btn2");

const divAlert = () => {
    alert("Div 2 clicked")
}

const btnAlert = () => {
    alert("Btn 2 clicked")
}


//event capturing
div2.addEventListener('click', divAlert, {capture:true})

btn2.addEventListener('click',btnAlert, {capture:true})

//removing element
btn2.removeEventListener('click', btnAlert, {capture:true})