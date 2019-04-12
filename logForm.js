var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var userMessage = document.getElementById("message");




    function signup(){
        var userEmai = document.getElementById("email").value;
        var str = userEmai;
    
         var someChars = str.slice(-4);
         for (var i = 0; i < str.length; i++) {
           if (someChars !== ".com") {
                    alert("please Enter the Correct Email Address")
                    break;
                }
        }
        var users = localStorage.getItem("userKey");
    console.log(users);
    
    var users = localStorage.getItem("userKey");
    console.log(users);
    
    var flag = false;
    if(users === null){
        users = [];
    }
    else{
        users = JSON.parse(users);
        console.log(users);
    }
    var userObj ={
        userEmail : userEmail.value,
        userPassword :userPassword.value
    }
    for(var i = 0; i < users.length; i++){
        if(users[i].userEmail === userEmail.value){
            flag = true;
        }
    }
    if(flag === true){
        userMessage.innerHTML = "Email is already Sign In"
    }
    
    else{
        users.push(userObj);
        users =  JSON.stringify(users);
        users = localStorage.setItem("userKey", users);
        userEmail.value = "";
        userPassword.value = "";
    
        userMessage.innerHTML = "successfuly Sign Up";
        
    }
    }


    
function login(){

    
    var userObj ={
        userEmail : userEmail.value,
        userPassword :userPassword.value

    }
    var userEmai = document.getElementById("email").value;
    var str = userEmai;
     var someChars = str.slice(-4);
     for (var i = 0; i < str.length; i++) {
       if (someChars !== ".com") {
                alert("please  Enter the Correct Email Address");
                break;
            }
    }
    var users = localStorage.getItem("userKey");
console.log(users);

if(users === null){
    users = [];
}
else{
    users = JSON.parse(users);
}
var authantication = false;

for(var i = 0; i < users.length; i++){
    if(users[i].userEmail === userEmail.value){
        authantication = true;
    }
}
if(authantication === false){
    userMessage.innerHTML = "Log in Failed"
}

else{
var username = JSON.stringify(userObj)
localStorage.setItem("username",username);
    userMessage.innerHTML = "Log In Success";
    userEmail.value = "";
    userPassword.value = "";
    window.location.href = "index.html";

}
};