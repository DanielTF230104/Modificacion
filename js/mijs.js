/********************************************
 *    función de validación
 */

function validacion(){
   let correcto = true;      // todo el mundo es inocente hasta que ...
   let nombre = document.getElementById('nombre').value;       //getter
   let apellidos = document.getElementById('apellidos').value; //getter
   let email = document.getElementById('email').value;         //getter
   let provincia = document.getElementById('provincia').value; //getter
   let sexo = document.querySelector('input[name="sexo"]:checked'); //getter
   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let exampleCheck1 = document.getElementById('exampleCheck1').checked;
 
   if (nombre=="")  {
      document.getElementById('nombreHelp').style.visibility="visible";
      document.getElementById('nombre').style.borderColor="red";
      correcto = false;
      // no deberia volverse aquí: return false;
   }
    
   if (apellidos=="")  {
    document.getElementById('apellidosHelp').style.visibility="visible";
    document.getElementById('apellidos').style.borderColor="red";
    correcto = false;
    // no deberia volverse aquí: return false;
 }
 
 if (!regexEmail.test(email))  {
   document.getElementById('emailHelp').style.visibility="visible";
   document.getElementById('email').style.borderColor="red";
    alert('Introduce un email válido');
    return false;
 }
 
 if (provincia=="" || provincia == 0)  {
   document.getElementById('provinciaHelp').style.visibility="visible";
   document.getElementById('provincia').style.borderColor="red";
    alert('Por favor, selecciona una provincia.');
    return false;
    // no deberia volverse aquí: return false;
 }
 
 if (!sexo)  {
    alert('Elija sexo, por favor');
    return false;
 }

 if (!exampleCheck1) {
   document.getElementById('exampleCheck1Help').style.visibility="visible";
   document.getElementById('exampleCheck1').style.borderColor="red";
   alert('Por favor, acepta los términos y condiciones.');
   return false;
}
    return correcto;
 }
 
 function resetear(id){  //instancio con nombre, apellidos, etc...
    document.getElementById(id+'Help').style.visibility="hidden"; //concateno el id con 'Help'
    document.getElementById(id).style.borderColor="lightgray";
 }