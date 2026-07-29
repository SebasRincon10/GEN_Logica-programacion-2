function convertir(){
    const temp = Number(document.getElementById('numeroInput').value);
    if (temp ===""){
        alert("Debes Escribir Temperatura");
    }
    const res1 = temp + 273.15;
    const res2 = (temp*(9/5))+32;
    const listaDivs = document.getElementsByClassName('resultado');
    for (let i = 0; i < listaDivs.length; i++) {
    listaDivs[i].style.display = "block";
    }
    document.getElementById('resultado1').textContent=`${temp}° Celsius en grados Kelvin son ${res1}°`;
    document.getElementById('resultado2').textContent=`${temp}° Celsius en grados Farenheit son ${res2}°`;

}