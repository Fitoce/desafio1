
function encriptar(){
    var texto = document.getElementById("inTexto").value.toLowerCase();
    
    var txtCifrado = texto.replace(/e/igm,"enter"); 
    var txtCifrado = txtCifrado.replace(/i/igm,"imes"); 
    var txtCifrado = txtCifrado.replace(/a/igm,"ai"); 
    var txtCifrado = txtCifrado.replace(/o/igm,"ober"); 
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
  

    document.getElementById("imgDerecha").style.display = "none" ; 
    document.getElementById("texto1").style.display = "none" ;
    document.getElementById("texto2").innerHTML = txtCifrado ;
    document.getElementById("copiar").style.display = "show" ;
    document.getElementById("copiar").style.display = "inherit" ;
   
}

function desencriptar(){
    var texto = document.getElementById("inTexto").value.toLowerCase();
    
    var txtCifrado = texto.replace(/enter/igm,"e"); 
    var txtCifrado = txtCifrado.replace(/imes/igm, "i"); 
    var txtCifrado = txtCifrado.replace(/ai/igm, "a"); 
    var txtCifrado = txtCifrado.replace(/ober/igm, "o"); 
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");
    

    document.getElementById("imgDerecha").style.display = "none" ; 
    document.getElementById("texto1").style.display = "none" ;
    document.getElementById("texto2").innerHTML = txtCifrado ;
    document.getElementById("copiar").style.display = "show" ;
    document.getElementById("copiar").style.display = "inherit" ;
    
}

function copiar(){
    var texto3 = document.getElementById("texto2");
    navigator.clipboard.writeText(texto3.value);
    
    //alert("se copio")   
}
function resetarea(){
    let input = document.getElementById("inTexto");
    input.value ="";
                    
}
