function calcular(){
    const peso = parseFloat(document.getElementById("entrada1").value);
    const altura = parseFloat(document.getElementById("entrada2").value);
    const imc = peso/(altura**2);
    document.getElementById("label1").innerHTML = `IMC: ${imc}`;
    if (imc < 18.5){
        document.getElementById("label2").innerHTML = "Teu IMC está baixo, por este motivo, cuide-se caso não queira morrer.";
    }
    if (imc >= 18.5 && imc < 25){
        document.getElementById("label2").innerHTML = "Teu IMC está bom, por este motivo, continue assim.";
    }
    if (imc >= 25 && imc < 30){
        document.getElementById("label2").innerHTML = "Tu estás com sobrepeso, por este motivo, cuide-se caso não queira ficar obeso.";
    }
    if (imc >= 30){
        document.getElementById("label2").innerHTML = "Tu estás obeso, por este motivo, cuide-se caso não queira morrer."
    }
}