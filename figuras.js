// Codigo del Cuadrado:

function perimetroCuadrado(lado){
    perimetroDelCuadrado = lado * 4;
    return perimetroDelCuadrado;
} 
perimetroCuadrado(5);

function areaCuadrado(lado){
    areaDelCuadrado = lado * lado;
    return areaDelCuadrado;
}
areaCuadrado(5);



// Codigo del Triangulo:
function perimetroTriangulo(lado1, lado2, base){
    perimetroDelTriangulo = lado1 + lado2 + base;
    return perimetroDelTriangulo;
}
perimetroTriangulo();

function areaTriangulo(base, altura){
    areaDelTriangulo = (base * altura) / 2;
    return areaDelTriangulo;
} 
areaTriangulo();

//Triangulo isosceles 
function trianguloIso(lado1, lado2, base){
    if(lado1 === lado2 || lado1 === base || lado2 === base){
        hipotenusa = Math.sqrt(lado1 ** 2 - (base ** 2 / 4));
        // alert(hipotenusa);
    } else {
        // alert('ni idea');
    }
}
trianguloIso();
//Codigo del Circulo 


function diametroCirculo (radio) {
    diametro = radio * 2;
    
    return diametro;
    
}
diametroCirculo();

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    perimetroDelCirculo = Math.round(diametro * 3.14);
    return perimetroDelCirculo;
}


function areaCirculo(radio){
    areaDelCirculo = (radio * radio) * 3.14;
    return areaDelCirculo;
}
areaCirculo();




// Empezando a interactuar con HTML 

function calcularPerimetroCuadrado(){
    const input = document.getElementById('input--cuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resultadoCuadrado = document.getElementById('prf-resultado-cuadrado');
    if(value <= 0){
        resultadoCuadrado.innerText = 'Coloca un numero válido para calcular.'
    } else{
        resultadoCuadrado.innerText = `El perimetro del cuadrado es ${perimetro}cm`;
    }
    
}

function calcularAreaCuadrado(){
    const input = document.getElementById('input--cuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    const resultadoCuadrado = document.getElementById('prf-resultado-cuadrado')
    if(value <= 0){
        resultadoCuadrado.innerText('Coloca un numero válido para calcular.')
    } else{
        resultadoCuadrado.innerText = `El area del cuadrado es ${area} cm^2`;
    }
    
}


//Triangulo

function calcularPerimetroTriangulo(){
    const inputTriangulo = document.getElementById('input--triangulo');
    const inputTriangulo2 = document.getElementById('input--triangulo2');
    const inputTriangulo3 = document.getElementById('input--triangulo3');
    const valueTriangulo1 = Number(inputTriangulo.value);
    const valueTriangulo2 = Number(inputTriangulo2.value);
    const valueTriangulo3 = Number(inputTriangulo3.value);
    const perimetro = perimetroTriangulo(valueTriangulo1, valueTriangulo2, valueTriangulo3);
    const resultadoTriangulo = document.getElementById('prf-resultado-triangulo');
    if (valueTriangulo1 <= 0 && valueTriangulo2 <= 0 && valueTriangulo3 <= 0){
        resultadoTriangulo.innerText = 'Coloca un numero válido para calcular.'
    }else{
        resultadoTriangulo.innerText = `El perimetro del Triangulo es de ${perimetro}cm`;
    }
    
}

function calcularAreaTriangulo(){
    
    const inputTriangulo3 = document.getElementById('input--triangulo3');
    const inputTriangulo4 = document.getElementById('input--triangulo4');
    const valueTriangulo3 = inputTriangulo3.value;
    const valueTriangulo4 = inputTriangulo4.value;
    const areaDelTriangulo = areaTriangulo(valueTriangulo3, valueTriangulo4);
    const resultadoTriangulo = document.getElementById('prf-resultado-triangulo');
    if(valueTriangulo4 <= 0){
        resultadoTriangulo.innerText = 'Debes colocar la altura para calcular el área'
    }else {
        resultadoTriangulo.innerText = `El area del Triangulo es de ${areaDelTriangulo} cm^2`;
    }
    
}

// Circulo 
function calcularPerimetroCirculo(){
const inputCirculo = document.getElementById('input--circulo');
const valueCirculo = inputCirculo.value;
const perimetroDelCirculo = perimetroCirculo(valueCirculo);
const resultadoCirculo = document.getElementById('prf-resultado-circulo');
    if(valueCirculo <= 0 ){
        resultadoCirculo.innerText = 'Coloca un numero válido para calcular.'
    }else {
        resultadoCirculo.innerText = `El perimetro del circulo es de ${perimetroDelCirculo}cm`;
}

}

function calcularAreaCirculo(){
    const inputCirculo = document.getElementById('input--circulo');
    const valueCirculo = inputCirculo.value;
    const areaDelCirculo = areaCirculo(valueCirculo);
    const resultadoCirculo = document.getElementById('prf-resultado-circulo');
    if(valueCirculo <= 0){
        resultadoCirculo.innerText = 'Coloca un numero válido para calcular.';
    }else {
        resultadoCirculo.innerText = `El área del circulo es de ${areaDelCirculo} cm^2`;
    }
    
}