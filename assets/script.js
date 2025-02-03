let dolar = 5.837

let usd_input = document.querySelector("#usd")
let brl_input = document.querySelector("#brl")

async function getExchangeRate() {
    try {
        let response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        let data = await response.json()
        dolar = parseFloat(data.USDBRL.bid)
        console.log("Cotação atualizada: ", dolar)
    } catch (error) {
        console.error("Erro ao obter a cotação: ", error)
    }
}

getExchangeRate()

usd_input.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brl_input.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usd_input.addEventListener("blur", () => {
    usd_input.value = format_currency(usd_input.value)
})

usd_input.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        usd_input.value = format_currency(usd_input.value)
    }
})

brl_input.addEventListener("blur", () => {
    brl_input.value = format_currency(brl_input.value)
})

brl_input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        brl_input.value = format_currency(brl_input.value)
    }
})

//funcoes
function format_currency(value){
    let fixed_value = fix_value(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)

    return formatter.format(fixed_value)
}

function fix_value(value){
    let fixed_value = value.replace(",", ".")
    let float_value = parseFloat(fixed_value)
    return isNaN(float_value) ? 0 : float_value;
}

function convert(type) {
    if(type == "usd-to-brl"){
        let fixed_value = fix_value(usd_input.value)

        let result = fixed_value * dolar
        result = result.toFixed(2)

        brl_input.value = format_currency(result) 
    }

    if(type == "brl-to-usd"){
        let fixed_value = fix_value(brl_input.value)

        let result = fixed_value / dolar
        result = result.toFixed(2)

        usd_input.value = format_currency(result)
    }
}
