function isEmpty(value) {
	return value==null || value==undefined || value=="";
}

function getById(id) {
	return document.getElementById(id);
}

function writeMessageToElement(element,message) {
	document.getElementById(element).innerHTML = message;
}

function isEmail(value) {
	return value.includes("@");
}

function containsUpperCaseItem(value) {
	let hasItem = false;
    for(let f in value) {
       if(value.charCodeAt(f)>=65 && value.charCodeAt(f)<=90) {
       	 hasItem = true;
       	 break;
       }
    }
    return hasItem;
}

function containsLowerCaseItem(value) {
	let hasItem = false;
    for(let f in value) {
       if(value.charCodeAt(f)>=97 && value.charCodeAt(f)<=122) {
       	 hasItem = true;
       	 break;
       }
    }
    return hasItem;
}

function containsnumber(value) {
	let hasItem = false;
    for(let f in value) {
       if(value.charCodeAt(f)>=48 && value.charCodeAt(f)<=57) {
       	 hasItem = true;
       	 break;
       }
    }
    return hasItem;
}