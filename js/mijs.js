/********************************************
 *    función de validación
 */

function validacion(){
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let provincia = document.getElementById('provincia').value;
    let email = document.getElementById('email').value;
    
    if (nombre=="")  {
       document.getElementById('nombreHelp').style.visibility="visible";
       document.getElementById('nombre').style.borderColor="red";
       document.getElementById('emailHelp').style.visibility="visible";
       document.getElementById('email').style.borderColor="red";
       return false;
    }

    if (apellidos=="") {
        document.getElementById('apellidosHelp').style.visibility="visible";
        document.getElementById('apellidos').style.borderColor="red";
        return false;
    }

    if (provincia=="") {
        document.getElementById('provinciaHelp').style.visibility="visible";
        document.getElementById('provincia').style.borderColor="red";
        return false;
     }

    if (email=="") {
        document.getElementById('provinciaHelp').style.visibility="visible";
        document.getElementById('provincia').style.borderColor="red";
        return false;
     }
       
  }
  
  function resetear(id){
     document.getElementById(id+'Help').style.visibility="hidden";
     document.getElementById(id).style.borderColor="lightgray";
     document.getElementById(id+'Help').style.visibility="hidden";
     document.getElementById(id).style.borderColor="lightgray";
     document.getElementById(id+'Help').style.visibility="hidden";
     document.getElementById(id).style.borderColor="lightgray";
     document.getElementById(id+'Help').style.visibility="hidden";
     document.getElementById(id).style.borderColor="lightgray";
  }