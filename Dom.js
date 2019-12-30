function DOM() {
	
	this.getById = function(id) {
		return document.getElementById(id);
	}

   this._getValueById = function(id) {
   	   return this.getById(id).value;
          
   }

   this._getTextById = function(id) {
	    return this.getById(id).innerText;
   }

   this._hasValue = function(id) {
     return this.getById(id).type!=undefined;
   }

   this._hasText = function(id) {
      return this.getById(id).type == undefined;
   }

   this.text = function(id) {
   	  if(this._hasText(id))
   	  	return this._getTextById(id);
   	  else if(this._hasValue(id))
   	  	return this._getValueById(id);
   	  else
   	  	return "";
   }


   this.writeMessage = function(element,message) {

   let obj = this.getById(element);
   if(this._hasText(element))
	 obj.innerText = message;
	else
		 obj.value = message;
   }


   this.clearFields = function(selectors) {

      if(typeof(selectors) == "object") {
      	for(let selector of selectors) {
               this.writeMessage(selector,"");
      		}
      	}
      }
   }
   
   