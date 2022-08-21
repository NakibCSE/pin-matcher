
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
    
        return pin;
    }
    else
    {
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
   const number =  event.target.innerText;
   const typedNumberField = document.getElementById('typed-numbers');
   const previousTypedNumber = typedNumberField.value;
   if(isNaN(number)){
     if(number === 'C'){
        typedNumberField.value = '';
     }
     else if(number === '<'){
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remaingingDigit = digits.join('');
        typedNumberField.value = remaingingDigit;
     }
   }
   else
   {
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
   }
})


document.getElementById('verify-pin').addEventListener('click',function(){
    const displayField = document.getElementById('display-pin');
    const currentPin = displayField.value;


    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSFailureMessage = document.getElementById('pin-failure');
    const pinSuccessMessage = document.getElementById('pin-success');
    if(currentPin === typedNumber){
        
        pinSuccessMessage.style.display = 'block';
        pinSFailureMessage.style.display = 'none';
        

    }
    else
    {
        pinSFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})