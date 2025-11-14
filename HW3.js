 /*
    Name: Simon Atencio Machado
    File: HW3.js
    Date created: November 13 2025
    Date last edit: November 14, 2025
    Version: 1
    Description: JavaScript for Homework 3 for MIS 3371
*/
//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

function validatedob() 
{
    dob = document.getElementById("DOB");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) 
    {
        document.getElementById("DOBerror").innerHTML = 
        "Future dates are invalid";
        dob.value = "";
        return false;
    } 
      else 
         if (date < new Date(maxDate)) 
         {
        document.getElementById("DOBerror").innerHTML = 
        "Dates 120 years in the past are not valid";
        dob.value = "";
        return false;
         } 
         else 
         {
        document.getElementById("DOBerror").innerHTML = "";
        return true;
        }
}

function validateSSN()
{
      const ssn = document.getElementById("SSN").value;
      const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) 
    {
        document.getElementById("SSNerror").innerHTML = 
        "SSN not valid";
        return false;
    } 
    else 
    {
        document.getElementById("SSNerror").innerHTML = "";
        return true;
    }
}

function validatezip()
{
         const zipval = document.getElementById("zip");
         let zip = zipval.value.replace(/[^\d-]/g, "");

    if (!zip) 
    {
        document.getElementById("ziperror").innerHTML = 
        "This is a required field";
        return false;
    }

    if (zip.length > 5) 
    {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else 
    {
        zip = zip.slice(0, 5);
    }

    zipval.value = zip;
    document.getElementById("ziperror").innerHTML = "";
    return true;
 
}

function validateemail()
{
      const email = document.getElementById("email").value;
      var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) 
    {
        document.getElementById("emailerror").innerHTML = 
        "This is a required field";
        return false;
    } 
    else 
    {
        document.getElementById("emailerror").innerHTML = "";
        return true;
    }
}

function validatephone()
{
     const phone = document.getElementById("phone").value;
     const phoneR = /^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
   if (!phone)
   {
    document.getElementById("phoneerror").innerHTML =
    "Phone # is required";
    return false;
   }
   else
   {
    document.getElementById("phoneerror").innerHTML= "";
    return true;
   }
 
}

function validateUN() 
{
    un = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = un;

    if (un.length == 0) 
    {
        document.getElementById("UNerror").innerHTML = 
        "This is a required field";
        return false;
    }

    if (!isNaN(un.charAt(0))) 
    {
        document.getElementById("UNerror").innerHTML = 
        "No numbers as first characters";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(un)) 
    {
        document.getElementById("UNerror").innerHTML = 
        "Your username contains an invalid character";
        return false;
    } else if (un.length < 5) 
    {
        document.getElementById("UNerror").innerHTML = 
        "Too short";
        return false;
    } else if (uid.length > 30) 
    {
        document.getElementById("UNerror").innerHTML = 
        "Too long";
        return false;
    } else 
    {
        document.getElementById("UNerror").innerHTML = "";
        return true;
    }
}

function validatepassword()
{
   if (!password.match(/[a-z]/)) errorMessage.push("Lowercase letter missing");
   if (!password.match(/[A-Z]/)) errorMessage.push("Uppercase letter missing");
   if (!password.match(/[0-9]/)) errorMessage.push("Number missing");
   if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Special character missing");
   if (password.includes(un)) errorMessage.push("Username detected");
 
}

function checkpassword()
{
    paswword1 = document.getElementById("password").value;
    password2 = document.getElementById("password2").value;

    if (password1 !== password2) 
    {
        document.getElementById("passwordcheckerror").innerHTML = 
        "Passwords are not the same";
        return false;
    } else 
    {
        document.getElementById("passwordcheckerror").innerHTML = 
        "Good";
        return true;
    }
}
function CheckData() 
{
    var data = document.getElementById("form1");
    var data = document.getElementById("form2");
    var data = document.getElementById("form3");
    var data = document.getElementById("form4");
    var data = document.getElementById("form5");
    var data = document.getElementById("form6");
    var data = document.getElementById("form7");
    var data = document.getElementById("form8");
    var output = "<table class='output'><th colspan = '3'> Check the data entered</th>";
    for (let i = 0; i < data.length; i++) 
    {
        if (data.elements[i].value !== "") 
        {
            switch (data.elements[i].type) 
            {
                case "checkbox":
                    if (data.elements[i].checked) 
                    {
                        output += `<tr><td align='right'>${data.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (data.elements[i].checked) 
                    {
                        output += `<tr><td align='right'>${data.elements[i].name}</td><td>${data.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    output += `<tr><td align='right'>${data.elements[i].name}</td><td>${data.elements[i].value}</td></tr>`;
            }
        }
    }
    output += "</table>";
    document.getElementById("displayData").innerHTML = output;
}
function Alert() {
    var alertBox = document.getElementById("alertfield");
    var closeAlert = document.getElementById("closealert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}
function validateEverything() {
    let valid = true;

    if (!validatefname()) {
        valid = false;
    }
    if (!validatemidnitial()) {
        valid = false;
    }
    if (!validatelname()) {
        valid = false;
    }
    if (!validatedob()) {
        valid = false;
    }
    if (!validateSSN()) {
        valid = false;
    }
    if (!validateaddress()) {
        valid = false;
    }
    if (!validatecity()) {
        valid = false;
    }
    if (!validatezip()) {
        valid = false;
    }
    if (!validateemail()) {
        valid = false;
    }
    if (!validatephone()) {
        valid = false;
    }
    if (!validateUN()) {
        valid = false;
    }
    if (!validatepassword()) {
        valid = false;
    }
    if (!checkpassword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        Alert();
     }
 }
function validatecity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("cityerror").innerHTML = "City is a required field";
        return false;
    } else {
        document.getElementById("cityerror").innerHTML = "";
        return true;
    }
}
function validatefname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fnameerror").innerHTML = "First name is required"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fnameerror").innerHTML = "Invalid character entered";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fnameerror").innerHTML = "Too short";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fnameerror").innerHTML = "Too long";
        return false;
    } else {
        document.getElementById("fnameerror").innerHTML = "";
        return true;
    }
}
}
function validatemidnitial() {
    mini = document.getElementById("midinitial").value;
    var namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("miderror").innerHTML = 
        "Invalid";
        return false;
    } else {
        document.getElementById("miderror").innerHTML = "";
        return true;
    }
}
function validatelname() {
    fname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("lnameerror").innerHTML = "First name is required"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("lnameerror").innerHTML = "Invalid character entered";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("lnameerror").innerHTML = "Too short";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("lnameerror").innerHTML = "Too long";
        return false;
    } else {
        document.getElementById("lnameerror").innerHTML = "";
        return true;
    }
}
}
