

var ran_d = prompt ("กรอกตัวเลข")
console.log("รับ "+ran_d+" มา และ เป็น "+typeof ran_d )

document.getElementById("U_number").innerHTML = ran_d
document.getElementById("output").innerHTML = Math.floor(Math.random()*101)

console.log(U_number == output)

document.getElementById("aws").innerHTML = U_number == output

