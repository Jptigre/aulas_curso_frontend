function media(){
  //+-------------------
  //|Recebe as notas 
  //+-------------------
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  var c = parseFloat(document.getElementById('valor03').value);
  
  //+-------------------
  // |Cálculo de média
  //+-------------------
  
  var maior = a;
  
  if (b > maior) {
    maior = b; 
  } 

  if(c > maior){
    maior = c;
  }
  
  document.getElementById("demo").innerHTML = "Maior Valor = " + maior.toString();
}