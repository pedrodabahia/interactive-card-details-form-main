$(document).ready(function(){
  
  

  function borderRed(){ 
    //verifica se o inpu ta vazio, caso esteja, muda a cor da borda e da um hide no span  
    $('input').each((index,element) => {

    $(element).focus().keydown(function(){
      if($('input').eq(index).val() != ''){  
      $(element).css('border-color','rgb(	91, 23, 130)');
      $(element).css('border-color','rgb(119, 110, 124)');
      $('span.'+element.className).hide();
    }})
    
    if($('input').eq(index).val() == ''){
      $('span.'+element.className).show();
     $(element).css('border-color','red');
     console.log(element.className);
    }})  
  }

   mascaraInputNamber()  
    
    $("#btn-form").click(function(e){
       
        var name = $('#input-name').val()
        var numero = $('#input-namber').val()
        var dataMes = $('#input-date-mes').val()
        var dataAno = $('#input-date-ano').val()
        var cvc = $('#input-cvc').val()

        


        if(name == '' || numero == '' || dataMes == '' || dataAno == '' || cvc == ''){
          
          borderRed()
          

        }else  if($('#input-date-mes').val() > 12 && $('#input-date-ano').val() < 22 && $('#input-namber').val().length < 18){

          $('span.aviso-data').show();
          $('#input-date-mes').css('border-color','red');
          $('#input-date-ano').css('border-color','red');
          $('span.aviso-namber').show();
          $('#input-namber').css('border-color','red');
          e.preventDefault();
       
        }else if($('#input-date-mes').val() > 12 && $('#input-date-ano').val() < 22 && $('#input-namber').val().length == 19){
          $('#input-namber').css('border-color','rgb(119, 110, 124)');
          $('span.aviso-namber').hide();
          $('span.aviso-data').show();
          $('#input-date-mes').css('border-color','red');
          $('#input-date-ano').css('border-color','red');
          e.preventDefault();
       
        }else if($('#input-date-mes').val() > 12 && $('#input-date-ano').val() > 22 && $('#input-namber').val().length == 19){
          $('#input-namber').css('border-color','rgb(119, 110, 124)');
          $('span.aviso-namber').hide();
          $('span.aviso-data').show();
          $('#input-date-mes').css('border-color','red');
          $('#input-date-ano').css('border-color','rgb(119, 110, 124)');
          e.preventDefault();
       
        }else if($('#input-date-mes').val() < 12 && $('#input-date-ano').val() < 22 && $('#input-namber').val().length == 19){
          $('#input-namber').css('border-color','rgb(119, 110, 124)');
          $('span.aviso-namber').hide();
          $('span.aviso-data').show();
          $('#input-date-mes').css('border-color','rgb(119, 110, 124)');
          $('#input-date-ano').css('border-color','red');
          e.preventDefault();
       
        }else  if($('#input-namber').val().length <= 18 ){
          $('span.aviso-data').hide();
          $('#input-date-mes').css('border-color','rgb(119, 110, 124)');
          $('#input-date-ano').css('border-color','rgb(119, 110, 124)');
          $('span.aviso-namber').show();
          $('#input-namber').css('border-color','red');
          e.preventDefault();

        }else{

        $('#namber-card').text(numero)
        $('#name-card').text(name)
        $('#adta-card').text(dataMes+"/"+dataAno)
        $('#namber-securit').text(cvc)
        $('.formulario-card').hide()
        $('.complate-state').show()
        e.preventDefault();
        }
        
    });

    $('#btnOpen').click(() => {
        $('.complate-state').hide();
        location.reload()

    })

  });