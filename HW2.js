 /*
    Name: Simon Atencio Machado
    File: HW2.js
    Date created: October 24, 2025
    Date last edit: October 26, 2025
    Version: 1
    Description: JavaScript for Homework 2 for MIS 3371
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
    var data = document.getElementById("review");
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





