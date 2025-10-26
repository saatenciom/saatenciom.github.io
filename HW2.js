 /*
    Name: Simon Atencio Machado
    File: Homework1.js
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
    let date = new Date(DOB.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) 
    {
        document.getElementById("DOBerror").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } 
      else 
         if (date < new Date(maxDate)) 
         {
        document.getElementById("DOBerror").innerHTML = 
        "Date can't be more than 120 years ago";
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
        "Please enter a valid SSN";
        return false;
    } 
    else 
    {
        document.getElementById("SSNerror").innerHTML = "";
        return true;
    }

 
}

