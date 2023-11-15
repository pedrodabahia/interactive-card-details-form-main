







  function mascaraInputNamber(){
      
      function mascara(o,f){
        inputUltilizado = o
        expressao = f
        setTimeout(execmascara(),1)
    }
    function execmascara(){
        inputUltilizado.value = expressao(inputUltilizado.value);
    }

      function mtel(v){
        v=v.replace(/\D/g,""); //Remove tudo o que não é dígito

        v=v.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/,"$1 $2 $3 $4"); //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    }

      var number = document.getElementById('input-namber');
      number.onkeyup = function(){
        mascara(this , mtel)
      }
  
  }

