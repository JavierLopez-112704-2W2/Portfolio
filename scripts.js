
$(document).ready(function () {    

  //Efecto de imágenes en sección de proyectos-----------------------
  $("#imag").hover(
    function () {
      $(this).css('border-radius', '0%')
    },

    function () {
      $(this).css('border-radius', '50%');
    }
  );

  $("#imag2").hover(
    function () {
      $(this).css('border-radius', '0%')
    },

    function () {
      $(this).css('border-radius', '50%');
    }
  );
  //---Efecto Display en Experiencia--------------------------------
  $("#trabajo1").hover(
    function () {
      $("#efecto1").css('display', 'block');
      $(this).css('border-left', '2px solid rgb(151, 151, 22)');
      $(this).css('border-bottom', '2px solid rgb(151, 151, 22)');
    },

    function () {
      $("#efecto1").css('display', 'none');
      $(this).css('border-left', '1px solid rgb(151, 151, 22)');
      $(this).css('border-bottom', '1px solid rgb(151, 151, 22)');
    }
    
  );

  $("#trabajo2").hover(
    function () {
      $("#efecto2").css('display', 'block');
      $(this).css('border-left', '2px solid rgb(151, 151, 22)');
      $(this).css('border-bottom', '2px solid rgb(151, 151, 22)');
    },

    function () {
      $("#efecto2").css('display', 'none');
      $(this).css('border-left', '1px solid rgb(151, 151, 22)');
      $(this).css('border-bottom', '1px solid rgb(151, 151, 22)');
    }
    
  );
  //--Validaciones---------------------------------------------------------

  

    function enviarFormulario(){

      let nombre = document.getElementById('txtNombre');
      let apellido = document.getElementById('txtApellido');
      let email = document.getElementById('txtEmail');
      let box = document.getElementById('txtBox');

      if(
        nombre.value == "" || apellido.value == "" || email.value == "" || box.value == ""){
          //swal("ALERTA\n\nDebe completar todos los campos.");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos deben ser completados'
          });
          return true; 
      }
      return false;         

    }



    $("#btnEnviar").click(function(){
      if(enviarFormulario()){ 
        $(this).submit();
      }
    });
    


});






