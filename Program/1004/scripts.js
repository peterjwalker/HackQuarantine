var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

if (isMobile){
    document.getElementById("factbox").style.marginTop = "40%";
    //document.getElementById("title").style.innerHTML = "<center>Fake News Checker</center>";
}
else{
    document.getElementById("title").style.left = '42%';
}


function openNav() {
    if (isMobile){
        document.getElementById("mySidenav").style.width = "100%";
        
    }
    else {
        document.getElementById("mySidenav").style.width = "40%";
    }
    setTimeout(function(){document.getElementById("helptext").src = "blank.png";}, 1000)
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function search(){
    var request = new XMLHttpRequest();
    var term = document.getElementById("factbox").value;
    if (term == ""){
        alert("Please enter a fact to check...");
    }
    else{
        encodedterm = '"'+term+'" -fake -disproved';
        //console.log(term);
        var url = 'https://peter.stockportdojo.org.uk/HackQ/Serpapi.php?term='+encodeURIComponent(encodedterm);
        //console.log(url);
        request.open('GET',url, true);
        request.send();
        alert("Getting results... Please bear with us")
        console.log('Sent request');
        request.onload = function() {
            console.log('Received response');
            //console.log(this.response);
            var data = JSON.parse(this.response);
            console.log(data);
            var results = data.organic_results;
            //console.log(data);
            var total_results = data.search_information.total_results;
            //console.log(total_results);
            total_results = parseInt(total_results);
            if (total_results > 100000000) {
                var accuracy = 99;
            } else if (total_results > 10000000) {
                var accuracy = 80;
            } else if (total_results > 1000000) {
                var accuracy = 70;    
            } else if (total_results > 500000) {
                var accuracy = 60;
            } else if (total_results > 50000) {
                var accuracy = 50;
            } else {
                var accuracy = (total_results / 1000);
            }
            document.getElementById("percentage").innerHTML = 'Accuracy: '+accuracy+'%';
            document.getElementById("placeholder").innerHTML = 'This result may not be accurate.<br> See the top Google Search results (below) for more clarification';
            //var choice = prompt("This result may not be accurate. Enter 'results' here to see the Google Search results for this query, as well");
            //console.log(choice)
            //if (choice == "results"){
            document.getElementById("info").innerHTML = 'Top Google Search Results:';

            var result1 = document.getElementById("result1");
            var linkr1 = results[0].link;
            var titler1 = results[0].title;
            //console.log(linkr1);
            result1.innerHTML = '<a href="'+linkr1+'">'+titler1+'</a>';

            var result2 = document.getElementById("result2");
            var linkr2 = results[1].link;
            var titler2 = results[1].title;
            result2.innerHTML = '<a href="'+linkr2+'">'+titler2+'</a>';

            var result3 = document.getElementById("result3");
            var linkr3 = results[2].link;
            var titler3 = results[2].title;
            result3.innerHTML = '<a href="'+linkr3+'">'+titler3+'</a>';

            var result4 = document.getElementById("result4");
            var linkr4 = results[3].link;
            var titler4 = results[3].title;
            result4.innerHTML = '<a href="'+linkr4+'">'+titler4+'</a>';

            var result5 = document.getElementById("result5");
            var linkr5 = results[4].link;
            var titler5 = results[4].title;
            result5.innerHTML = '<a href="'+linkr5+'">'+titler5+'</a>';

            var result6 = document.getElementById("result6");
            var linkr6 = results[5].link;
            var titler6 = results[5].title;
            result6.innerHTML = '<a href="'+linkr6+'">'+titler6+'</a>';

            var result7 = document.getElementById("result7");
            var linkr7 = results[6].link;
            var titler7 = results[6].title;
            result7.innerHTML = '<a href="'+linkr7+'">'+titler7+'</a>';

            var result8 = document.getElementById("result8");
            var linkr8 = results[7].link;
            var titler8 = results[7].title;
            result8.innerHTML = '<a href="'+linkr8+'">'+titler8+'</a>';

            var result9 = document.getElementById("result9");
            var linkr9 = results[8].link;
            var titler9 = results[8].title;
            result9.innerHTML = '<a href="'+linkr9+'">'+titler9+'</a>';              
            //}
        }
    }
    

}

// Get the input field
var input = document.getElementById("factbox");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchbtn").click();
  }
});