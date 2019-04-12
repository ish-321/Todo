function myFu( name, id, sub1, sub2, sub3, sub4, sub5, sub6){
    this.name1 = name;
    this.id1 = id;
    this.subject1 = sub1;
    this.subject2 = sub2;
    this.subject3 = sub3;
    this.subject4 = sub4;
    this.subject5 = sub5;
    this.subject6 = sub6;
}
var information = [];
var serId = []
function cons(){
var name = document.getElementById("validationDefault01").value;
var id = document.getElementById("validationDefault02").value;
var sub1 = document.getElementById("validationDefault03").value;
sub1 = Number(sub1);
var sub2 = document.getElementById("validationDefault04").value;
sub2 = Number(sub2);
var sub3 = document.getElementById("validationDefault05").value;
sub3 = Number(sub3);
var sub4 = document.getElementById("validationDefault06").value;
sub4 = Number(sub4);
var sub5 = document.getElementById("validationDefault07").value;
sub5 = Number(sub5);
var sub6 = document.getElementById("validationDefault08").value;
sub6 = Number(sub6);

var x = new myFu(name, id, sub1, sub2, sub3, sub4, sub5, sub6)
information.push(x);
console.log(information);
serId.push(id);
console.log(serId)
}
function search(){
    var sID = document.getElementById("sid").value;
    for(var i = 0; i < serId.length; i++){
    if(sID === serId[i]){
    console.log(information[i]);
    var a = information[i];
    var totalper = (a.subject1 + a.subject2 + a.subject3 + a.subject4+ a.subject5+ a.subject6)
    document.getElementById("one").value = a.name1;
    document.getElementById("two").value = a.id1;
    document.getElementById("three").value = a.subject1;
    document.getElementById("four").value = a.subject2;
    document.getElementById("five").value = a.subject3;
    document.getElementById("six").value = a.subject4;
    document.getElementById("seven").value = a.subject5;
    document.getElementById("eight").value = a.subject6;
    document.getElementById("nine").value = (totalper  / 600 * 100) + "%";
            }
        }
    }
var username = localStorage.getItem("username");
username = JSON.parse(username);
username = username.userEmail;
username = username.slice(0,username.length-4)
document.getElementById("label").innerHTML = username;

function logout(){
window.location.href="loginForm.html";
localStorage.removeItem("username")   
};