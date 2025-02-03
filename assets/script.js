let dolar = 5.837

let usd_input = document.querySelector("#usd")
let brl_input = document.querySelector("#brl")

usd_input.addEventListener("keyup", () => {
    
})

brl_input.addEventListener("keyup", () => {
    
})

usd_input.value = "1000,00"
convert("usd-to-brl")

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
    if(float_value == NaN){
        float_value = 0
    }
    
    return float_value
}

function cinvert(type) {
    if(type == "usd-to-brl"){
        
    }

    if(type == "brl-to-usd"){

    }
}
