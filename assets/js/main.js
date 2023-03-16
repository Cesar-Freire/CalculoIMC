//Criando uma variável, que pega do formulário
const form = document.querySelector('.formulario');

//Uma função que pega input e não atualiza a pagina
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso')
    const inputAltura = e.target.querySelector('.altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

// criando condição

    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc (peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);

});

function getNivelImc(imc) {

    //array de lista com as informações de pesos
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2','Obesidade grau 3'];

    // condição com os pesos
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
    
}

//função que pega dos unputs os valores
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
}

// função que cria um paragrafo
function criaP () {
    const p = document.createElement('p');
    return p;
}

// função que da resultado no paragrafo
function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();

// condição cor do paragrafo verde de true
    if (isValid) {
        p.classList.add('cuidado');

// condição cor do paragrafo vermelho para false        
    } else {
        p.classList.add('erro');
    }

    p.innerText = msg;
    resultado.appendChild(p);
}