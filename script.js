// script.js
document.getElementById("quizzForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var termoInicial = parseInt(document.getElementById("termoInicial").value);
    var diferencaComum = parseInt(document.getElementById("diferencaComum").value);
    var numTermos = parseInt(document.getElementById("numTermos").value);
    
    // Verificar respostas corretas
    if (termoInicial === 1 && diferencaComum === 2 && numTermos ===
        {
            document.getElementById("resultadoQuizz").textContent = "Parabéns! Você acertou todas as respostas!";
            } else {
            document.getElementById("resultadoQuizz").textContent = "Ops! Alguma resposta está incorreta. Tente novamente!";
            }
            });
            function mostrarSimulacao() {
            var termoInicial = parseInt(document.getElementById("simulacaoTermoInicial").value);
            var diferencaComum = parseInt(document.getElementById("simulacaoDiferencaComum").value);
            var numTermos = parseInt(document.getElementById("simulacaoNumTermos").value);
            
            var pa = [];
            pa.push(termoInicial);
            for (var i = 1; i < numTermos; i++) {
            pa.push(termoInicial + (i * diferencaComum));
            }
            
            document.getElementById("simulacaoResultado").textContent = "Os " + numTermos + " primeiros termos da PA são: " + pa.join(", ");
            }
              