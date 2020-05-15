"use strict";

//var time = 0;

window.addEventListener("load", setupPage);

function setupPage() {
    //console.log(window.location.hash);
    if (document.getElementById(hashToID("Page")) === null && window.location.hash != "") {
        //console.log(document.getElementById(window.location.hash.replace("#", "").concat("Page")));
        error;
    } else if (window.location.hash != "") {
        if (window.location.hash == "#Error") {
            errorMessage();
            activatePage(hashToID("Page"));
            errorTitle();
        } else {
            hashPageChange("Page", "Button");
            changeTitle("Button");
        }
        /*document.querySelectorAll(".navItem").forEach(item => {
            if (window.location.hash != "Error") {
                item.classList.remove("activeNavItem");
            }
        });*/
    } else if (window.location.hash == "") {
        hashChange("KezdolapPage", "KezdolapButton");
    }
    console.log("Page loaded.");
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
    document.getElementById("generateErrorButton").addEventListener("click", () => { 
        window.location.hash = "GeneratingError"; 
    });
    document.getElementById("hashSelect").addEventListener("change", () => { 
        window.location.hash = document.getElementById("hashSelect").value;
        var selectElement = document.getElementById("hashSelect");
        var selectOptions = selectElement.options;
        for (var opt, j = 0; opt = selectOptions[j]; j++) {
            if (opt.value == "default") {
                selectElement.selectedIndex = j;
                break;
            }
        }
    });
    /*document.querySelectorAll(".hashSelect").forEach(item => {
        item.addEventListener("change", hashList);
    });*/
}
