const birthDate = new Date(2011, 11, 25, 12, 23, 46, 988);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const birthPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
if(!birthPassed)
    age--;
document.getElementById("age").textContent=age;