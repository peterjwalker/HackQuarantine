var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

function openNav() {
    if (isMobile){
        document.getElementById("mySidenav").style.width = "100%";
    }
    else {
        document.getElementById("mySidenav").style.width = "40%";
    }

}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//function Mobile(){
//    alert("hey");
//    }