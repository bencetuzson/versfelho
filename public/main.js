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

    // //console.log(window.location.hash);
    // if (document.getElementById(hashToID("Page")) === null && window.location.hash != "") {
    //     //console.log(document.getElementById(window.location.hash.replace("#", "").concat("Page")));
    //     error;
    // } else if (window.location.hash != "") {
    //     if (window.location.hash == "#Error") {
    //         errorMessage();
    //         activatePage(hashToID("Page"));
    //         errorTitle();
    //     } else {
    //         hashPageChange("Page", "Button");
    //         changeTitle("Button");
    //     }
    //     /*document.querySelectorAll(".navItem").forEach(item => {
    //         if (window.location.hash != "Error") {
    //             item.classList.remove("activeNavItem");
    //         }
    //     });*/
    // } else if (window.location.hash == "") {
    //     hashChange("KezdolapPage", "KezdolapButton");
    // }
    // console.log("Page loaded.");
    // document.querySelectorAll(".navItem").forEach(item => {
    //     item.addEventListener("click", navClick);
    // });
    /*document.querySelectorAll(".hashSelect").forEach(item => {
        item.addEventListener("change", hashList);
    });*/
}
