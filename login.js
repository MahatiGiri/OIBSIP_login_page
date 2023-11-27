var n= 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "mahatigiri" && password == "mahati#123"){
    alert ("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
    }
    else{
    n--;// Decrementing by one.
    alert("You have left "+ n +" attempt;");
    // Disabling fields after 3 attempts.
    if( n == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
    }
}