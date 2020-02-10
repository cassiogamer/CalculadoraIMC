var imb = document.getElementById("calcular")
var reset = document.getElementById("resetar")

imb.addEventListener("click", function() {

    var res = document.getElementById("res")
    var imp = Number(document.getElementById("peso").value)
    var ima = Number(document.getElementById("altura").value)
    var calc = imp / ima**2

    if(calc < 19.5) {
        res.innerHTML += "Você está abaixo do peso"
    }

    if (calc >= 19.5 && calc < 26.4) {
        res.innerHTML += "Você está com o peso ideal"
    }
    
    if (calc >= 26.4 && calc < 31) {
        res.innerHTML += "Você está acima do peso"
    }

    if (calc >= 31) {
        res.innerHTML += "Você está obeso(a)"
    }

    res.innerHTML += `<br>Resultado : ${calc}`

})

reset.addEventListener("click", function() {

    document.getElementById("peso").value = ''
    document.getElementById("altura").value = ''
    res.innerHTML = ""

})




