function validateForm() {
    let email = document.forms["logIn"]["mail"].value;
    if (email == "") {
      alert("Mobile number or Email address must be filled out");
      return false;
    }
    let pswd = document.forms["logIn"]["password"].value;
    if (pswd == "") {
        alert("Password must be atleast 8 characters contains one upper case,lower case ,numeric values and a special character");
        return false;
        
      }

} 

function signValidate(){
  let firstName = document.forms["signUp"]["fName"].value;
  {
  if (firstName == "") {
        alert("Enter your first name");
        return false;     
    }
    if (firstName.length < 3 ) {
      alert("First name should be atleast three characters");
      return false;     
  }
}
    let surName = document.forms["signUp"]["sName"].value;
    if (surName == "") {
          alert("Enter your sur name");
          return false;     
      }
      if (surName.length < 3 ) {
        alert("Sur name should be atleast three characters");
        return false;     
    }
      let mobile_email = document.forms["signUp"]["mob-email"].value;
    if (mobile_email == "") {
          alert("Enter your mobile number or email address");
          return false;     
      }

       let pswd1 = document.forms["signUp"]["pass"].value;
    if (pswd1 == "") {
        alert("Password must be atleast 8 characters contains one upper case,lower case ,numeric values and a special character");
        return false;
    }
  

       let DOB = document.forms["signUp"]["dateofbirth"].value;
     if (DOB == "") {
        alert("Enter your date of birth");
        return false;
}
}