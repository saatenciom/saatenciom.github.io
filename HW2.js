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
