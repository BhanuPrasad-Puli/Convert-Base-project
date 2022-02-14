let inputText = document.getElementById("inputElement");
let outputText = document.getElementById("outputElement");
let fromBase = document.getElementById("fromBaseElement");
let toBase = document.getElementById("toBaseElement");
let btn = document.getElementById("buttonElement");
let swapButton = document.getElementById("Swap-btn");



btn.addEventListener("click",() => {
   let input = inputText.value;

//Decimal base to other bases 
   if(fromBase.value === "Decimal"){

    input = Number(input);
    if(fromBase.value === "Decimal" && toBase.value === "Binary"){
       outputText.value = input.toString(2);
       return;
        
    }

  else if(fromBase.value === "Decimal" && toBase.value === "Octal"){
    outputText.value = input.toString(8);
    return;
  }

    else if(fromBase.value === "Decimal" && toBase.value === "Hexadecimal"){
        outputText.value = input.toString(16);
        return;
    }
     else if(fromBase.value === "Decimal" && toBase.value === "Decimal"){
        outputText.value = input;
        return;
             }
   }


//Binary Base to other Bases
 if(fromBase.value === "Binary"){
    if(fromBase.value === "Binary" && toBase.value === "Decimal"){
        outputText.value =parseInt(input, 2);
        return ;
    }

   else if(fromBase.value === "Binary" && toBase.value === "Hexadecimal"){
        outputText.value = parseInt(input, 2).toString(16);
        return ;
    }

    else if(fromBase.value === "Binary" && toBase.value === "Octal"){
        outputText.value = parseInt(input, 2).toString(8);
        return ;
    }

    else if(fromBase.value === "Binary" && toBase.value === "Binary"){
        outputText.value = input;
        return ;
    }
   }

   //Octal base to other Bases

   if(fromBase.value === "Octal"){
   
    if(fromBase.value === "Octal" && toBase.value === "Decimal"){
        outputText.value = parseInt(input,8).toString(10);
        return ;
    }

   else if(fromBase.value === "Octal" && toBase.value === "Hexadecimal"){
        outputText.value = parseInt(input,8).toString(16);
        return ;
    }

    else if(fromBase.value === "Octal" && toBase.value === "Octal"){
        outputText.value = input.value;
        return ;
    }

    else if(fromBase.value === "Octal" && toBase.value === "Binary"){
        outputText.value = parseInt(input,8).toString(2);
        return ;
    }
   }

   //hexdecimal to other bases 

   if(fromBase.value === "Hexadecimal"){
    if(fromBase.value === "Hexadecimal" && toBase.value === "Decimal"){
        outputText.value = parseInt(input,16);
        return ;
    }

   else if(fromBase.value === "Hexadecimal" && toBase.value === "Hexadecimal"){
        outputText.value = input;
        return ;
    }

    else if(fromBase.value === "Hexadecimal" && toBase.value === "Octal"){
        outputText.value = parseInt(input,16).toString(8);
        return ;
    }

    else if(fromBase.value === "Hexadecimal" && toBase.value === "Binary"){
        outputText.value = parseInt(input,16).toString(2);
        return ;
    }
   }



})

swapButton.addEventListener("click",()=>{
    let temp = fromBase.value;
    fromBase.value = toBase.value;
    toBase.value =temp;
})