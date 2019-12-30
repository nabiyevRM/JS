function Database() {

    	this.isDbEmpty = function() {
    		return localStorage.container == undefined || localStorage.container == null;
    	}

    	this._clearDb = function() {
    		localStorage.clear();
    	}


      this.isUserExists = function(email) {
    
    	if(this.isDbEmpty()) return false;
    	else
    	{
    		 let obj = this._getAllData();

    		 if(!this._isArray(obj)) {
    		  	if(obj.email == email) return true;else return false;
    		 }
    		 else
    		 {
          let isFound = this._ifUserExists(obj,x=>x.email == email); 
    		 	return isFound;
    		 }
    	}
    }

    this._isArray = function(obj) {
      return obj.length != undefined;
    }

   //helper method for "findUser"
    this._ifUserExists = function(obj,callback) {
           let exists = false;
            for(let f of obj) {
                if(callback(f)) {
                    exists = true;
                    break;
                }
            }
            return exists;
    }

    this.findUser = function(callback) {

       let exists = false;
    	 //get all data from db as object
         let obj  = this._getAllData();

         if(!this._isArray(obj)) {
            if(callback(obj)) {
              exists = true;
            }
          else
            exists = false;
         }
          else {
             exists = this._ifUserExists(obj,callback);
          }
        
         return exists;
    }

    
    this._saveData = function(data) {
    	localStorage.container = JSON.stringify(data);
    }
    

    this._getAllData = function() {
    	return JSON.parse(localStorage.container);
    }


     this.addUser =  function(user) {

     	if(!this.isUserExists(user.email)) {
           
     		if(this.isDbEmpty()) {

                this._saveData(user);
     		}
     		else
     		{
               let obj = this._getAllData();

               if(!this._isArray(obj)) {

               	 let ms = [];
               	 ms.push(obj);
               	 this._saveAsArray(ms,user);
               }
               else
               {
                 this._saveAsArray(obj,user);
               }
     	   	}
     		
     	}
  }

  this._saveAsArray = function(array,data) {
       array.push(data);
       this._saveData(array);
  }


  this.users = function() {
    if(this.isDbEmpty()) 
      return null;
    else
  	return this._getAllData();
  }


}