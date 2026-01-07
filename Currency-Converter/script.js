// input variables
const amount = document.getElementById("amount");
const currencyF = document.getElementById("currencyF");
const currencyT = document.getElementById("currencyT");
const result = document.getElementById("result");
const convert = document.getElementById("convert");
const reset = document.getElementById("reset");

// btn function
convert.addEventListener("click",convert_Currency);
reset.addEventListener("click",()=>{
    amount.value = '';
    currencyF.value = '';
    currencyT.value = '';
    result.value = '';
})

// convert function
async function convert_Currency(){

    if(amount.value === '' || currencyF.value === '' || currencyT.value === '' )
        return;
    let amt = Number(amount.value);
    let base_currency = currencyF.value;
    let to_currency = currencyT.value;
    let result_currency = await getCurrency(base_currency,to_currency,amt);
    result.value = result_currency;
}

// api call for currecy rates
async function getCurrency(base_currency,to_currency,amt){
    try{
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base_currency}`)
        let data =await response.json();
        let data_rate = await data.rates[`${to_currency}`];
        return (amt*data_rate);
    }
    catch(error)
    {
        console.log(error);
    }
}