let pswrd=document.getElementById("box");
let clear=document.getElementsByClassName("clr")
let length=13;
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnopqrstuvwxyz";
let num='0123456789';
let char="!@#$^&*";
let allchar= upperCase + lowerCase + num + char;
function generate(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=char[Math.floor(Math.random()*char.length)];
    while(length>password.length){
        password+=allchar[Math.floor(Math.random()*allchar.length)]; 
    }
     pswrd.value= password;
}
function clrr(){
    pswrd.value="";

}
