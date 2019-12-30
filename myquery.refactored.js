	function $(selector) {
          return new _(selector);
	}

	function _(selector) {

		this.text = function() {
			
             let result = "";
		       this._forEach((f)=>result += f.innerText);
		     return result;
		}
       
        this._forEach = function(callback) {
        	let elements = document.querySelectorAll(selector);
        	for(let f of elements) {
               callback(f);
        	}
        }

		this.click = function(callback) {
			this._forEach((f)=>f.addEventListener("click",callback));
		}

		this.on = function(eventName,callback) {
			
           this._forEach((f)=>f.addEventListener(eventName,callback));
			
		}
		this.ready = function(callback) {
			if(selector.body != undefined) {
				document.addEventListener("DOMContentLoaded",callback);
			}
		}

		this.hide = function() {
			if(typeof selector == "object") {
				selector.style.display = "none";
			}
			else {
				 this._forEach((f)=>f.style.display = "none");
			    	
			}
		}

		this.show = function() {
			if(typeof selector == "object") {
				selector.style.display = "block";
			}
			else
				{
               		this._forEach((f)=>f.style.display = "block");
				}
		}

	}