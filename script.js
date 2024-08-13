//alert("loading");
function addNewWEField() { 
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("row",3);
   newNode.setAttribute("placeholder","Enter here");

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    // console.log("Adding new field");
 
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3);
    newNode.setAttribute("placeholder","Enter here");
 
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
 
    aqOb.insertBefore(newNode, aqAddButtonOb);
 }

 // generating Cv

 function generateCV(){

   /*console.log("Generating cv")*/
   let namefield=document.getElementById("namefield").value;

   let nameT1=document.getElementById("nameT1");

   nameT1.innerHTML = namefield;

   // direct

   document.getElementById("nameT2").innerHTML= namefield;

   // contact

   document.getElementById("contactT").innerHTML= document.getElementById("contactfield").value;

   // address

   document.getElementById("addressT").innerHTML= document.getElementById("addressfield").value;

   //links

   document.getElementById("fbT").innerHTML= document.getElementById("fbfield").value;

   document.getElementById("linkedT").innerHTML= document.getElementById("linkedfield").value;
   
   //objective

   document.getElementById("objectiveT").innerHTML= document.getElementById("objectivefield").value;

   //work experience
   
   let wes = document.getElementsByClassName("weField");

   let str = "";

   for (let e of wes){
      str = str + `<li> ${e.value} </li>`;
   }

   document.getElementById("weT").innerHTML = str;

   //academic qualification

   let aqs = document.getElementsByClassName("aqField");

   let str1 = "";

   for (let e of aqs){
      str1 = str1 + `<li> ${e.value} </li>`;
   }

   document.getElementById("aqT").innerHTML = str1;

   //code is for selecting img

   let file=document.getElementById("imgfield").files[0];

   console.log(file);

   let reader=new FileReader()

   reader.readAsDataURL(file);

   console.log(reader.result);

   //set the image to template

   reader.onloadend=function(){

      document.getElementById("imgT").src = reader.result;
      
   }

   document.getElementById("cv-form").style.display="none"
   document.getElementById("cv-template").style.display="block"   
 }

 // print  cv

 function printCV(){
   window.print();
 }