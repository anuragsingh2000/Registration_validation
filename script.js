function validation()
{
   var name = document.getElementById('full_name').value;
   var Username = document.getElementById('Username').value;
   var emails = document.getElementById('emails').value;
   var Phone_Number = document.getElementById('Phone_Number').value;
   var pass_word = document.getElementById('pass_word').value;
   var con_pass = document.getElementById('con_pass').value;
  
   if(name==""){
     document.getElementById('full').innerHTML= "please enter the full name!";
   }
   

   if(Username==""){
    document.getElementById('user').innerHTML= "Username is required!!";
    
  }

  if((Username.length<=2 || Username.length>20))
  {
    document.getElementById('user').innerHTML= "username must be in the range of 2 and 20";
  }
 
  if(emails==""){
    document.getElementById('Email').innerHTML= "please enter the Email Address!";
  }
  if(emails.indexOf('@')<=0)
  {
    document.getElementById('Email').innerHTML= "@ invalid position";
  }
  if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.'))
{
  document.getElementById('Email').innerHTML= "Plese enter valid email address!";
  
}

  if(Phone_Number==""){
    document.getElementById('Phone Number').innerHTML= "please enter the phone number field!";
    
     
  }
  if(isNaN(Phone_Number))
  {
    document.getElementById('Phone Number').innerHTML= "phone number only contains numeric values!";

    

  }
  if(Phone_Number.length!=10)
  {
    document.getElementById('Phone Number').innerHTML= "phone number must be 10 digits only!";
    
  }


  if(pass_word==""){
    document.getElementById('passwords').innerHTML= "please enter the password field!";
    
    
  }

  if((pass_word.length<=5 || pass_word.length>20))
  {
    document.getElementById('passwords').innerHTML= "password must be in the range of 5 and 20";
  }

  if(pass_word!=con_pass)
  {
    document.getElementById('passwords').innerHTML= "password and confirm password are not matching";
  }


  if(con_pass==""){
    document.getElementById('c_password').innerHTML= "please enter the confirm password field!";

     

  }



}