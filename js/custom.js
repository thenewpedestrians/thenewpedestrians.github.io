logop = true;

function changeElement() {
    if (logop) {
        document.getElementById("thelogo").style.opacity = 0;
        document.getElementById("thebutton").innerHTML = "Bring it back";
        logop = false;
    }
    else {
        document.getElementById("thelogo").style.opacity = 1;
        document.getElementById("thebutton").innerHTML = "Show me again";
        logop = true;
    }
}