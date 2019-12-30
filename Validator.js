function ErrorModel(key,value) {
	return {errorKey:key,ErrorMessage:value};
}


function Validator() {

	this.isEmpty = function(value) {
	"use strict"
	return value == null || value==undefined || value=="";
		}

	this.isEmail = function(value) {
	"use strict"
	return value.includes("@");
		}


	this.nameIsAllowed = function(n,value) {

	if(n.toLowerCase().includes(value)) {
     return false;
	}
	else
		return true;
	}


	this.hasNumber = function(value) {

	let isFound = false;
	for(let f in value) {
		if(value.charCodeAt(f)>=48 && value.charCodeAt(f)<=57) {
			isFound=true;
			break;
		}
	}

	return isFound;
  }

   this.hasUpperCaseElements = function(value) {

	let isFound = false;
	for(let f in value) {
		if(value.charCodeAt(f)>=65 && value.charCodeAt(f)<=90) {
			isFound=true;
			break;
		}
	}

	return isFound;
	}

	this.hasLowerCaseElements = function(value) {

	let isFound = false;
	for(let f in value) {
		if(value.charCodeAt(f)>=97 && value.charCodeAt(f)<=122) {
			isFound = true;
			break;
		}
	}

	return isFound;
   }

   this.validateLogin = function(user) {

   	 	let errors = [];

   	 	 if(this.isEmpty(user.email)) {
              	errors.push(new ErrorModel("email_login_error","Email can't be empty"));
           }
           else
           	if(!this.isEmail(user.email)) {
           		errors.push(new ErrorModel("email_login_error", "Email is not valid"));
           	}
          
             if(user.password.length<6) {
             	errors.push(new ErrorModel("password_login_error", "Password length is not valid"));
             }
             else
             	if(!this.hasNumber(user.password) ||  !this.hasUpperCaseElements(user.password) || !this.hasLowerCaseElements(user.password)) {
                       errors.push(new ErrorModel("password_login_error","Password is not valid"));
             	}

             	return errors;

   }

   this.validate = function(user) {
   	let errors = [];

     if(user.nameSurname!=undefined) {

     		if(this.isEmpty(user.nameSurname)) {
   		        errors.push(new ErrorModel("name_surname_error","name surname can't be empty"))

			}
			else
            if(!this.nameIsAllowed(user.nameSurname,"admin")) {
            	errors.push(new ErrorModel("name_surname_error","This name is not allowed"));
            }
     }
   

           
           if(this.isEmpty(user.email)) {
              	errors.push(new ErrorModel("email_error","Email can't be empty"));
           }
           else
           	if(!this.isEmail(user.email)) {
           		errors.push(new ErrorModel("email_error", "Email is not valid"));
           	}
          
             if(user.password.length<6) {
             	errors.push(new ErrorModel("password_error", "Password length is not valid"));
             }
             

             	return errors;
   }


}