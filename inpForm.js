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
var serId = [];
function cons(){
name = document.getElementById("validationDefault01").value;
id = document.getElementById("validationDefault02").value;
sub1 = Number(document.getElementById("validationDefault03").value);
sub2 = Number(document.getElementById("validationDefault04").value);
sub3 =Number(document.getElementById("validationDefault05").value);
sub4 = Number(document.getElementById("validationDefault06").value);
sub5 = Number(document.getElementById("validationDefault07").value);
sub6 = Number(document.getElementById("validationDefault08").value);
var x = new myFu(name, id, sub1, sub2, sub3, sub4, sub5, sub6)
information.push(x);
console.log(information);
serId.push(id);
// console.log(serId)

window.location.href = "loginForm.html";


}




// var sID = document.getElementById("sid").value;
// for(var i = 0; i < serId.length; i++){
//     if(sID === serId[i]){
//         console.log(information[i]);
//         var a = information[i];
//         var totalper = (a.subject1 + a.subject2 + a.subject3 + a.subject4+ a.subject5+ a.subject6)
//         document.getElementById("one").value = a.name1;
//         document.getElementById("two").value = a.id1;
//         document.getElementById("three").value = a.subject1;
//         document.getElementById("four").value = a.subject2;
//         document.getElementById("five").value = a.subject3;
//         document.getElementById("six").value = a.subject4;
//         document.getElementById("seven").value = a.subject5;
//         document.getElementById("eight").value = a.subject6;
//         document.getElementById("nine").value = totalper * 100 / 600;
//     }
// }