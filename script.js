var x = document.getElementById("user");
var p = document.getElementById("pass");
var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");
var ni=/^([admin]+)$/;
var feron=/^([12345]+)$/; 
function validatename(){
    if(x.value.trim()=="")  
    {
    err1.innerText="Username cannot be empty";
    x.style.border="2px solid red";
    return false;
  }
  else if(!x.value.match(ni))
   {
    err1.innerText="   invalid user name";
    x.style.border="2px solid red";
    return false;
   }
  else
  {
   x.style.border="2px solid green";
   err1.innerText="";
   return true;
  }}


  function validatePass(){
    if(p.value.trim()=="")
    {
        err2.innerText="Password cannot be empty";
        p.style.border="2px solid red";
        return false;
      }
      else if(!p.value.match(feron))
      {
       err2.innerText="  Incorrect Password";
       p.style.border="2px solid red";
       return false;
      }
      else
      {
      p.style.border="2px solid green";
      err2.innerText="";
      return true;
  }




}
function handleSubmit(callback){
    if(validatePass() && validatename())
    {
        callback();
        return true;

    }    
    else
    {
        return false;
    }

}
function redirect(){
    window.location='todos.html'
}