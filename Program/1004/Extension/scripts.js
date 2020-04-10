document.getElementById("searchbtn").addEventListener("click", search);

function search(){
    var request = new XMLHttpRequest();
    var term = document.getElementById("factbox").value;
    if (term == ""){
        document.getElementById("alert").innerHTML = '<i><b>Please enter a fact...</b></i>';
    }
    else{
      encodedterm = '"'+term+'" -fake -disproved';
      //console.log(term);
      var url = 'https://peter.stockportdojo.org.uk/HackQ/Serpapi.php?term='+encodeURIComponent(encodedterm);
      //console.log(url);
      request.open('GET',url, true);
      request.send();
      //alert("Getting results... Please bear with us")
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
          document.getElementById("percentage").innerHTML = 'Accuracy: '+accuracy+'%<br><a href="https://newschecker.online/" target="_blank" style="color: lightgrey;">Visit the website</a> to view the Google Search Results';

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