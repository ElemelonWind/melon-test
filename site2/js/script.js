(function(global) {
    var dc = {};
    var doc = window.location.pathname.split("/").pop();
    console.log(doc);
    doc = doc.substring(0, doc.indexOf("."));
    var homeHtml = "snippets/" + doc + "-snippet.html";
    // if(homeHtml === "snippets/-snippet.html") {
    //     homeHtml = "snippets/index-snippet.html";
    // }

    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };

    document.addEventListener("DOMContentLoaded", 
    function(event) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml,
            function(responseText) {
                document.querySelector("#main-content").innerHTML = responseText;
            }, false);
    });

    global.$dc = dc;

        $ajaxUtils.sendGetRequest("/files/versions.json",
                function(res) {
                    var version = "Site Version " + res.version;
                    var update = "Last Updated: " + res.lastUpdated;
                    console.log(version + update);
                    //if(window.screen.width >= 1200) 
                    document.getElementById("email").innerText = version;
                    document.getElementById("update").innerText = update;
                }); 
        
        // var version = "Site Version 0.8.1 (Beta)";
        // document.getElementById("email").innerText = version;
        // var update = "Last Updated: April 2021";
        // document.getElementById("update").innerText = update;

        // document.addEventListener("scroll", 
        //     function(event) {
        //         var x = document.querySelector("#dropdownMenuButton1");
        //         x.blur();
        //         //document.querySelector(".dropdown-menu").collapse('hide');
        //     }
        // );
}(window));

// $(function() { // same as document.addEventListener("DOMContentLoaded"...
//     // same as document.querySelector(".dropdown-menu").addEventListener("scroll")
//     $("#dropdownMenuButton1").blur(function(event) {
//         $(".dropdown-menu").collapse('hide');
//     });

// })
// ^ that would've worked if the css didn't get messed up for some reason :/