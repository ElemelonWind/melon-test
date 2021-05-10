document.addEventListener("DOMContentLoaded", 
    function(event) {
        console.log("hi");
        $ajaxUtils.sendGetRequest("/files/versions.json",
                function(res) {
                    var version = "Site Version " + res.version;
                    var update = "Last Updated: " + res.lastUpdated;
                    console.log(version + update);
                    document.getElementById("email").innerText = version;
                    document.getElementById("update").innerText = update;
                }); 
        
        // var version = "Site Version 0.8.1 (Beta)";
        // document.getElementById("email").innerText = version;
        // var update = "Last Updated: April 2021";
        // document.getElementById("update").innerText = update;
    }
);