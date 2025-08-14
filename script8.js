function contar() { 
    var startNumber = document.getElementById("start"); /* Obtém o valor do elemento com o ID 'start' (valor inicial) */
    var endNumber = document.getElementById("end"); /* Obtém o valor do elemento com o ID 'end' (valor final) */
    var stepNumber = document.getElementById("step"); /* Obtém o valor do elemento com o ID 'step' (passo) */
    var result = document.getElementById("result"); /* Obtém o elemento onde será exibido o resultado da contagem */

    if (startNumber.value.length == 0 || endNumber.value.length == 0 || stepNumber.value.length == 0) { /* Verifica se algum dos campos está vazio */
        result.innerHTML = "Impossível contar!"; /* Exibe mensagem de erro se algum campo estiver vazio */
    } else { 
        result.innerHTML = "Contando: <br>"; /* Inicia a contagem e insere a mensagem "Contando" */
        result.innerHTML += "🏠 "; /* Adiciona o ícone de casa antes da contagem */
        let i = Number(startNumber.value); /* Converte o valor do campo 'start' para número */
        let f = Number(endNumber.value); /* Converte o valor do campo 'end' para número */
        let p = Number(stepNumber.value); /* Converte o valor do campo 'step' para número */

        if (p <= 0) { /* Verifica se o valor do passo é zero ou negativo */
            window.alert("O passo não pode ser zero ou negativo! Usando o passo 1."); /* Exibe alerta caso o passo seja inválido */
            p = 1; /* Define o valor do passo como 1 */
        }
        if (i < f) { /* Verifica se o valor inicial (i) é menor que o valor final (f) */
            // Contagem crescente
            for (let c = i; c <= f; c += p) { /* Inicia um loop para contagem crescente, incrementando de acordo com o passo (p) */
                result.innerHTML += `${c} ✌🏻 `; /* Exibe o número atual e o ícone de paz para cada valor de c */
            }
        } else { 
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) { /* Inicia um loop para contagem regressiva, decrementando de acordo com o passo (p) */
                result.innerHTML += `${c} ✌🏻 `; /* Exibe o número atual e o ícone de paz para cada valor de c */
            }
        }
        result.innerHTML += `🏁`; /* Adiciona o ícone de bandeira de chegada no final da contagem */
    }
}
