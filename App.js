function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;



    //phone number validation
       if(isNaN(phone)){
        document.getElementById("phoneno").innerHTML = "Alphabet not allowed";
        return false
         }
        if(phone<=10){
        document.getElementById("phoneno").innerHTML = "please fill valid mobile no";
        return false
        }
        if(phone == ""){
         document.getElementById("phoneno").innerHTML = "please fill valid mobile no";
          phone.style.borderColor = "red";
         return false
             }


 //email number validation    
          if(email == ""){
          document.getElementById("emailid").innerHTML = "please fill email";
           return false
             }
           if(email.indexOf('@') <=0){
           document.getElementById("emailid").innerHTML = "@ invalid position";
            return false
             }
            if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
             document.getElementById("emailid").innerHTML = ". invalid position";
              return false
            }
            

    //username number validation      
         if(name == ""){
         document.getElementById("username").innerHTML = "input is empty";
          return false
          }
          if((name.length <=2) ||(name.length>20) ){
           document.getElementById("username").innerHTML = "user length must be 2 and 20";
            return false
             }
            if(!NaN(name)){
             document.getElementById("username").innerHTML = "Characters are not allowed";
             return false
             }



    }
