function calcular() {
var form = document.calculoIMC;
var altura = form.altura.value;
var peso = Number(form.peso.value);

if (altura.indexOf(',')>-1) {
altura=altura.replace(',','.');

}
altura=Number(altura);
var IMC = peso/Math.pow(altura,2);
var resultado = 'O seu Imc é' + IMC.toFixed(2);

if (IMC<18.5) {resultado +='Voçe encronta-se abaixo do peso ideal'}
else if (Imc<25) {resultado +='Voçe esta no seu peso normal, Parabens!'}
	else if (IMC<30) {resultado +='Voçe esta acima do seu peso (sobrepeso)'}
		else if (IMC<35) {resultado +='Obesidade grau 1'}
			else if (IMC<40) {resultado +='Obesidade grau 2'}
				else{resultado +='Obesidade grau 3'}

document.getElementById('resultado').innerHTML=resultado;

}