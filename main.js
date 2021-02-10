const form = document.getElementById("form");
const cnum = document.getElementById("cnum");
const expdate = document.getElementById("expdate");
const cvcode = document.getElementById("cvcode");
const cown = document.getElementById("cown");
const errorHan=document.getElementById("error")

const a=7;
form.addEventListener('submit', (e)=>{
    let message=[];
  
    if(cnum.value.length!==16)
    {
        message.push("Enter correct card number")
    }
    if(typeof (expdate.value) !== typeof (a)){
        message.push("Enter Date In Number")
    }
    if(cvcode.value.length !==3){
        message.push("Enter correct CVC")
    }
    if(cown.value.length <=3 ){
        message.push("Name should be greater than 3 letter")
    }
    if(message.length > 0){
        e.preventDefault()
        errorHan.innerText=message.join(',')
    }

})