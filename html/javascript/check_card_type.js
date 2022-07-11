const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    // return "";
    window.location.href = "/login.html";
  };
  
  const visa_card_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5lM2jljhx2ybbxBNeon5H5B49GvxV6uGAVsAOhIy312kOUQhQCJV7FWTMUTtXCJmc-Q&usqp=CAU";
  const mastercard_img="data:image/png;base64,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";
  const american_express_img="data:image/png;base64,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";
  const discover_card_img="data:image/jpeg;base64,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"

  const show_card_type=(card_type)=>{

switch (card_type) {
    case "visa":
        document.querySelector("#card_type").value="visa"
     document.querySelector("#card_type_img").src=visa_card_img
        break;

    case "mastercard":
        document.querySelector("#card_type").value="mastercard"
        document.querySelector("#card_type_img").src=mastercard_img
         
        break;

        case "american-express":
            document.querySelector("#card_type").value="american-express"
            document.querySelector("#card_type_img").src=american_express_img
             
            break;

            case "discover":
                document.querySelector("#card_type").value="discover"
                document.querySelector("#card_type_img").src=discover_card_img
                 
                break;

    default:
        document.querySelector("#card_type").value=""
        document.querySelector("#card_type_img").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9xdgGckJap4fRAzBNGp-6gr4u3ARPg_IhQ&usqp=CAU"
        break;
}

  }

  const check_card_type= async (card_number) => {
    const token=getCookie("token")
      try {
        const response = await fetch(
          "/api/user/validate/card_number",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({card_number,token}),
          }
        );
        const result = await response.json();
        if(result.error)return 
        show_card_type(result.message)
      } catch (err) {
        console.log(err);
      }
    };
    document.querySelector("#expiry_date").onkeyup=(event)=>formatString(event)
    function formatString(e) {
       document.querySelector("#expiry_date").style.border="2px solid #fff"
        var inputChar = String.fromCharCode(event.keyCode);
        var code = event.keyCode;
        var allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
          return;
        }
      
        event.target.value = event.target.value.replace(
          /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
          /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
          /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
          /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
          /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
          /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
          /\/\//g, '/' // Prevent entering more than 1 `/`
        );
      }
      

document.querySelector("#card_number").onkeyup=()=>{
   
    let card_number=document.querySelector("#card_number")
    
    card_number.style.border="2px solid #fff"
if(card_number.value.length >=4)check_card_type(card_number.value)
}

document.querySelector("#card_type").onchange=()=> {
    document.querySelector("#card_type").style.border="2px solid #fff";
    show_card_type(document.querySelector("#card_type").value)
}
