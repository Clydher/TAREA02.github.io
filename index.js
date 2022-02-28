
console.log('iniciando login');

    let usuario;
    let password;

    function login(){

    usuario = document.getElementById('usuario').value;
    console.log(usuario);
    password = document.getElementById('password').value;
    console.log(password);

       if(usuario == 'administrador'&& password == 1234 )
       window.location.href = './Home.html' 
    
       else(
      alert('usuario y contraseña incorrecta, vuelva a ingresar sus datos!!'));


      let n1, n2, n3, mayor;

      let numero1 = parseFloat(prompt('ingresar el primer numero'));
      let numero2 = parseFloat(prompt('ingresar el segundo numero'));
      let numero3 = parseFloat(prompt('ingresar el tercer numero'));
  
      if(numero1 >= numero2 && numero1 >= numero3){
          mayor = numero1}

      else if (numero2 >= numero1 && numero2 >= numero3){
        mayor = numero2;}

      else{
           mayor = numero3
        }

           console.log(mayor);
    }
    let saludo = "Hola mundo"
      function button(){
          console.log(saludo);
          alert(saludo);
      }


    

