
/**********************************************************
 *
 * 
 AppName:NIT-1.0.js
version:1.0
Author:Walulya Francis 
License:GNU General Public license
CopyRight:NYFYTECH LTD 2018 && National Institute Of Technology
All rights reserved
2018
***********************************************************/
    function main(initializationFunction){
        return window.onload = initializationFunction;
        }
function $(selector){
    var self = {};
    self.selector = selector;
    var tagedAtrr = selector.charAt(0);
    //selecting available class/tags and ids
    if(tagedAtrr == "#"){
    var newkey = selector.replace("#","");
   //id selector
    self.element = document.getElementById(newkey);

    }else if(tagedAtrr == "."){
        //class selector
    var newkey = selector.replace(".","");
    var classf = document.getElementsByClassName(newkey);
    for(i = 0; i<classf.length;i++){
   self.element = classf[i];
    }
    }else{

    self.element = document.querySelector(self.selector);

    }  
    self.html = function(out){
    if(!out) return self.element;
     self.element.innerHTML = out;
    }
    
    self.attr = function(name,value){
        if(!value) return self.element.getAttribute(name);
        self.element.setAttribute(name,value);
        return self;
    }
    self.css = function(cssProp,cssPropVal){
        if(cssProp instanceof Object && !cssPropVal){
        var cssString = toCssString(cssProp);
       return self.element.setAttribute("style",cssString + ";");
        }else{
       return self.element.setAttribute("style",cssProp + ":" + cssPropVal + ";");
        }
        return self;
    }
    self.setBackgroundImage = function(imgUrl,typeRepeat){
    if(!typeRepeat) return self.element.setAttribute("style","background: url('" + imgUrl + "')center top no-repeat");
    self.element.setAttribute("style","background: url('" + imgUrl + "') repeat");
    return self;
    }
    self.isChecked = function(){
    return  self.element.checked;
    }
    self.on = function(type,callback){
    self.element['on'+ type] = callback;
    return self;
    }
    self.addClass = function(name){
    self.element.setAttribute("class",name);
    return self;
    }
    self.removeClass = function(name){
        var dots = document.getElementsByClassName(name);
    var i = 0;
     for(i;i<dots.length;i++){

   dots[i].className = dots[i].className.replace(name,"");
   }
    return self;
    }
    //hide starts here
    self.hide = function(speed){
    if(!speed) return self.element.style.display = "none";
    setTimeout(getMeOut,speed);
    function getMeOut(){
    self.element.style.display = "none"; 
    }
    return self;
    }
    //hide ends here
    //show starts here
    self.show = function(speed){
    if(!speed) return self.element.style.display = "block";
    setTimeout(getMeOut,speed);
    function getMeOut(){
    self.element.style.display = "block";
    }
    return self;
    }
 //show Ends here
 //val function  starts here
    self.val = function(){
    return self.element.value; 
    }
    self.toggle = function(callback1){
    self.element.onclick = callback1;
    return self;
    }
    //checkall function starts here
    return self;
    }
    //ajax functions
//converting objects to url
function toURLEncode(data){
    var urlEncodedData = "";
  var urlEncodedDataPairs = [];
  var name;
  // Turn the data object into an array of URL-encoded key/value pairs.
  for(name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }
  // Combine the pairs into a single string and replace all %-encoded spaces to 
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
return urlEncodedData;
}
function toCssString(data){
    var urlEncodedData = "";
  var urlEncodedDataPairs = [];
  var name;
  // Turn the data object into an array of URL-encoded key/value pairs.
  for(name in data) {
    urlEncodedDataPairs.push(name + ':' + data[name]);
  }
  // Combine the pairs into a single string and replace all %-encoded spaces to 
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join(';').replace(/%20/g, '+');
return urlEncodedData;
}
function $ajax(ajaxData){
    //calling object
    var xhr = new XMLHttpRequest();

    var urlData = ajaxData.url;

    var methodData = ajaxData.method.trim();

    var dataTransmittion = ajaxData.data;

    var async = ajaxData.async;
    
    var dataType = ajaxData.type;

    //formating data to a new string

    //if our data is just and object
    if(dataTransmittion instanceof Object){
      //creating new url from custom object
    var newUrl = toURLEncode(dataTransmittion);
    //if our data is a formData object
    }else if(dataTransmittion instanceof FormData){
     
    var newUrl = dataTransmittion;

    }else{

    var newUrl = dataTransmittion;

    }
    
    if(async == undefined){

        var asyncString = "true";

      }else{
     
    var asyncString = async.trim();
       }

       if(methodData == "GET"){
    //GET 
    xhr.open(methodData,urlData + "?" + newUrl,asyncString);
    xhr.onload = function(){
        if(dataType == undefined){

            var xmldataOut = xhr.responseText;
            ajaxData.success(xmldataOut);

        }else if(dataType == "JSON"){

            var jsondataOut = JSON.parse(xhr.responseText);
            ajaxData.success(jsondataOut);
        }
    };
    //get those not require a data request header
    xhr.send();
}//if(methodData == "GET"){
    //formData objects
    else if(dataTransmittion instanceof FormData && methodData == "POST"){
    xhr.open(methodData,urlData);
    xhr.onload = function(){
        if(dataType == undefined){

            var xmldataOut = xhr.responseText;

            ajaxData.success(xmldataOut);

        }else if(dataType == "JSON"){

     var jsondataOut = JSON.parse(xhr.responseText);
    ajaxData.success(jsondataOut);

        }
    };
xhr.send(dataTransmittion);
}else{
    //The default if only ad only data is an object
xhr.open(methodData,urlData,asyncString);
xhr.onload = function(){
if(dataType == undefined){

            var xmldataOut = xhr.responseText;
            ajaxData.success(xmldataOut);

        }else if(dataType == "JSON"){

            var jsondataOut = JSON.parse(xhr.responseText);
            ajaxData.success(jsondataOut);
        }
    };
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send(newUrl);
}
}//$ajax(ajaxData){
function filter_var(string_matcher,validationConst){
    //REGEX DECLATION
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
var numbersOnlyRegex = /[^0-9]/;
var aplhanumericOnly =  /[^a-zA-Z0-9" "_]/;
   //RUNING THROUGH CONDITIONS
if(validationConst.trim() == "FILTER_VALIDATE_EMAIL"){
return emailRegex.test(string_matcher);
}else if(validationConst.trim() == "FILTER_ONLY_NUMBERS"){
return !numbersOnlyRegex.test(string_matcher) ? true : false;
}else if(validationConst.trim() == "FILTER_ONLY_ALPHANUMERIC"){
return !aplhanumericOnly.test(string_matcher) ? true : false;
}else{

}
}
function empty(fieldName){
    if(fieldName.length == ""){
    return true;
    }else{
    return false;
    }
    }
