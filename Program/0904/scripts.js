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
function search(){
    var request = new XMLHttpRequest();
    var term = document.getElementById("factbox").value;
    if (term == null){
        alert("No input entered")
    }
    else{
        var url = 'https://peter.stockportdojo.org.uk/HackQ/Serpapi.php?term='+encodeURIComponent(term);
        console.log(url)
        request.open('GET',url, true);
        request.send();
        console.log('#2');
        request.onload = function() {
            console.log('#3')
            var data = JSON.parse(this.response);
            console.log(data);
        }
    }
    
}
