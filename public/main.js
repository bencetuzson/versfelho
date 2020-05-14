"use strict";
window.addEventListener("load", setupPage);

function setupPage() {
    document.getElementById("generateErrorButton").addEventListener("click", () => {
        window.location.hash = "sajt";
    });
    window.addEventListener("hashchange", onHashChange);
    window.location.hash = "Kezdolap";
    document.querySelectorAll(".navItem").forEach(item => {
        item.addEventListener("click", navClick);
    });
    window.addEventListener("hashchange", () => {
        console.log(window.location.hash);
        if (document.getElementById(hashToID("Page")) === null && window.location.hash != ""){
            errorMessage();
            window.location.replace("#Error"); //Eredeti törölve az előzményekből
        } else if (window.location.hash == "#Error") {
            error();
        /*} else if(window.location.hash == "#Error") {
            error();*/
        }else{
            hashPageChange("Page", "Button");
            changeTitle("Button");
        }
        //console.log(document.getElementById(hashToID("Button")).innerHTML);
        //console.log(window.location.hash.replace("#", "").concat("Button"));
    });
}
