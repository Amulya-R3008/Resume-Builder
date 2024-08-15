
function addNewWEField(){
    //console.log("Adding new field");

 let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("weField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter Here")

 let weOb=document.getElementById("we");
 let weAddButtonOb = document.getElementById("weAddButton");

 weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField()
{
    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("eqField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter Here")

 let aqOb=document.getElementById("aq");
 let aqAddButtonOb = document.getElementById("aqAddButton");

 aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewKSField()
{
    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("ksField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter Here")

 let ksOb=document.getElementById("ks");
 let ksAddButtonOb = document.getElementById("ksAddButton");

 ksOb.insertBefore(newNode,ksAddButtonOb);
}

function addNewHSField()
{
    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("hsField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter Here")

 let hsOb=document.getElementById("hs");
 let hsAddButtonOb = document.getElementById("hsAddButton");

 hsOb.insertBefore(newNode,hsAddButtonOb);
}


//generating cv
function generateCV(){
  //  console.log("generating CV");
    // Validate fields before generating CV
    if (!validateFields()) {
        return; // Stop execution if fields are not valid
    }

    // Proceed with CV generation
    // Your existing code for generating the CV goes here



  let nameField=document.getElementById('nameField').value;

  let nameT1=document.getElementById('nameT1');

  nameT1.innerHTML=nameField;

  //direct
  //document.getElementById("nameT2").innerHTML=nameField;

  //contact
  document.getElementById("contactT").innerHTML='<i class="fas fa-phone"></i> ' + document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML='<i class="fas fa-home"></i>' + document.getElementById("addressField").value;

  //emailID
  document.getElementById("emailT").innerHTML='<i class="fas fa-envelope"></i>' + document.getElementById("emField").value;

  //facebookID
  document.getElementById("fbT").innerHTML='<i class="fab fa-github"></i>'+ document.getElementById("fbField").value;

  //instagramID
  //document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

  //linkedInID
  document.getElementById("linkedT").innerHTML='<i class="fab fa-linkedin"></i>' + document.getElementById("linkedField").value;


  //objective
  document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;


   //work experience
  let wes=document.getElementsByClassName("weField");

  let str="";

  for(let e of wes){
   str  = `${str}<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML=str;

    //academic qualifications  
    let aqs=document.getElementsByClassName('eqField')

    let str1="";

    for(let e of aqs){
        str1  = `${str1}<li> ${e.value} </li>`;
       }
     document.getElementById("aqT").innerHTML=str1;

   //key skills
   let kss=document.getElementsByClassName('ksField')

   let str2="";

   for(let e of kss){
       str2  = `${str2}<li> ${e.value} </li>`;
      }
    document.getElementById("ksT").innerHTML=str2;

//hobbies skills
   let hss=document.getElementsByClassName('hsField')

   let str3="";

   for(let e of hss){
       str3  = `${str3}<li> ${e.value} </li>`;
      }
    document.getElementById("hsT").innerHTML=str3;  

    //code for setting photo
    let file=document.getElementById('imgField').files[0];

    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);


    //set the image to template

    reader.onloadend=function()
    {
        document.getElementById('imgTemplate').src=reader.result;
    }

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}

function validateFields() {
    let nameField = document.getElementById('nameField').value;
    let contactField = document.getElementById('contactField').value;
    let addressField = document.getElementById('addressField').value;
    let emField = document.getElementById('emField').value;
    let fbField = document.getElementById('fbField').value;
    let linkedField = document.getElementById('linkedField').value;
    let objectiveField = document.getElementById('objectiveField').value;

    // Check if any of the required fields are empty
    if (!nameField || !contactField || !addressField || !emField || !fbField || !linkedField || !objectiveField) {
        alert('Please fill in all required fields.');
        return false; // Prevent form submission
    }
// Validate name field: only letters, apostrophes, hyphens; and must be 2 to 50 characters long
    let namePattern = /^[a-zA-Z' -]{2,50}$/;
    if (!namePattern.test(nameField)) {
        alert('Please enter a valid name. Only letters, apostrophes, and hyphens are allowed, and it must be between 2 and 50 characters long.');
        return false; // Prevent form submission
    }

 // Check if contactField contains exactly 10 digits
    let phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(contactField)) {
        alert('Please enter a valid phone number (10 digits only).');
        return false; // Prevent form submission
    }

// Check if emField is a valid email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emField)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // Additional validation checks can be added if needed

    return true; // All fields are valid
}


//print cv
function printCV()
{
    window.print();
}