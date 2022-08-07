function switchToSignIn()
{
    var form = document.getElementById("signInUpForm");
    
    form.innerHTML = '<form id="signInUserForm" action="blackjackGame.php" method="post><label for="signInUser">Username</label><input type="text" id="signInUser" name="signInUser"minlength="1" required><br><label for="signInPass">Password</label><input type="password" id="signInPass" name="signInPass" minlength="1" required><br><input type="button" name="submit" value="Log In" onclick="logInSubmit();"></form><br><label for="signInButton" id="switchLabel">Or, if you want to make an account:</label><button type="button" name="switchToCreate" onclick="switchToCreate()" id="signInButton">Create Account</button>';
}

function switchToCreate()
{
    var form = document.getElementById("signInUpForm");
    
    form.innerHTML = '<form id="createUserProfile" action="blackjackGame.php" method="post"><label for="createUser">Username</label><input type="text" id="createUser" name="createUser" minlength="1" required><br><label for="createPass">Password</label><input type="password" id="createPass" name="createPass" minlength="1" required><br><input type="button" name="submit" value="Sign Up" onclick="signUpSubmit();"></form><br><label for="switchToSignIn">Or, if you already have an account:</label><button type="button" id="switchToSignIn" name="switchToSignIn" onclick="switchToSignIn()">Sign In</button>'
}

function signUpSubmit()
{
    var user = $("#createUser").val();
    var pass = $("#createPass").val();
    var winnings = 100;
    console.log("User: ", user);
    if (!user || !pass)
        {
            alert("Please fill in both fields");
            return;
        }
    
    $.post("blackjackCreateUser.php", { createUser: user, createPass: pass }, 
    function (data, status)
    {
        $('#results').html(data);
    });
    
    console.log("World");
    
//    switchToSignIn();
}

function logInSubmit()
{
    var signInUser = $("#signInUser").val();
    var signInPass = $("#signInPass").val();
    console.log("User: ", signInUser, " Pass: ", signInPass);
    
    if (!signInUser || !signInPass)
        {
            alert("Please fill in both fields");
            return;
        }
    
    $.post("blackjackSignIn.php", { signInUser: signInUser, signInPass: signInPass},
    function (data, status)
    {
        $('#results').html(data);
    });
    
    document.getElementById("signInUserForm").innerHTML = "";
    document.getElementById("switchLabel").innerHTML = "";
    
    var button = document.getElementById("signInButton");
    button.innerHTML = "Sign Out";
    button.setAttribute("onclick", "signOut()");
}

function signOut()
{
    console.log(winnings);
    console.log("Butthole");
    $.get("blackjackSignOut.php", { winnings: winnings },
    function (data, status)
    {
        $('#results').html(data);
    });
    
    switchToSignIn();
}