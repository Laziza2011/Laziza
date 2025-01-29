let menuOpen = false;
function dropDown() {
    menuOpen = !menuOpen;
    if (menuopen == true) {
        document.getElementById("navId").style.display = "block";
    }
    else {
        document.getElementById("navId").style.display = "none";
    }
}