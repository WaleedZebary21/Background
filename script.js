var database = [
    {
        username: "Waleed",
        password: "supersecret"
    },
    {
        username: "Ali",
        password: "1234"
    },
    {
        username: "Hassan",
        password: "4321"
    }
];

var newsFeed = [
    {
        usrename: "zebary",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Ali",
        timeline: "Javascript is sooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preety cool!"
    }
];

function isUserValid(username,password){
    for (var i = 0; i < database.length; i++){
        if (database[i].username === username && database[i].password === password)
        {
            return true;
        }
    }
    return false
}

function signIn(checkUser,checkPasword)
{
    if(isUserValid(checkUser,checkPasword)){
        console.log(newsFeed);
    }
    else{
        alert("Sorry, worng username and password, please try again!")
    }
}
var userNamePrompt = prompt("What's your usrname?");
var passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt, passwordPrompt);