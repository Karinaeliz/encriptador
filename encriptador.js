
var output= document.getElementById("output");
var textInput= document.getElementById("input-texto");

function encriptar(){
    
    var texto = textInput.value;
    var textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById('output').innerHTML= '<textarea readonly id="resultado">'+ textoEncriptado + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
    
}
function desencriptar(){
    
    var texto = textInput.value;
    var textoDesencriptado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("output").innerHTML= '<textarea readonly id="resultado">'+ textoDesencriptado + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
    
}



function copiar(){
        var textoCopiar= document.getElementById('resultado');
        textoCopiar.select();
        document.execCommand('copy');
        alert("Texto copiado correctamente ");
}
