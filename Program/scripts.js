function openNav() {
    document.getElementById("mySidenav").style.width = "40%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function Mobile(){
    if (isMobileDevice() == true){
        
        document.getElementById("mySidenav").style.width = "100%";
    }
}