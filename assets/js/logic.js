
// Topics array and buttons
var topics = ["Tennis", "Soccer", "NBA", "MLB", "NFL", "UFC", "WWE", "NCAA", "PGA", "Rugby"];
var btn_type= ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "info", "light", "dark"];

function createButtons(){
    for(var i = 0; i < topics.length; i++){
        $("#button-field").append("<button type='button' class='btn btn-"+ btn_type [i]+"'>"+ topics[i] + "</button>");
        }
    };
createButtons();
// Search button click needs to add to the topics array


// Clicking on topics button sends a request to the Giphy API and displays results to page
$(document).on("click", "button", function(){
    event.preventDefault();
    $("#giph-field").empty();
    
    // GIPHY API key
    var apiKey = "eJS4WvyhxtAfE3V3tJCZoBYbsrvGQ446";
    var topic = $(this).html();
    console.log(topic);
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+topic+"&api_key="+apiKey+"&limit=10");
    xhr.done(function(data) { 
        console.log("success got data", data.data);
        var results = data.data;
        for(var i = 0; i < results.length; i++){
            var giphField = $("<div class='giphs'>");
            var giph = data.data[i].images.downsized.url;
            var giphImage = $("<img>");
            giphImage.attr("src", giph);

        // <image src="https://media3.giphy.com/media/KVVgzFKIlqBqx0OFIw/giphy-downsized.gif"></image>
            giphField.append(giphImage);

        $("#giph-field").append(giphField);
        }
    });
})