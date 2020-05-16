"use strict"

/**
 * Gombra való kattintáskor oldal és gomb aktiválás
 * @param {*} event Esemény
 */
function navClick(event) {
    //console.log(event);
    //console.log(event.target.classList.contains("activeNavItem"));
    if (event.target.classList.contains("activeNavItem") == false) {
        document.querySelectorAll(".deactivatedNavItem").forEach(item => {
            item.classList.remove("deactivatedNavItem");
        });
        //console.log(document.getElementById(hashToID("Button")));
        //console.log(document.getElementById(hashToID("Button")).classList.contains("activeNavItem"));
        //if (document.getElementById(hashToID("Button")).classList.contains("activeNavItem") == false) {
        document.querySelectorAll(".nonActivePage").forEach(item => {
            item.classList.remove("nonActivePage");
        });
        //}
        document.querySelectorAll(".activeNavItem").forEach(item => {
            item.classList.add("deactivatedNavItem");
        });
        document.querySelectorAll(".activePage").forEach(item => {
            item.classList.add("nonActivePage");
        });
        //console.log(document.getElementById(hashToID("Button")).classList.contains("activeNavItem"));
        activateNavItem(event.target.id);
        activatePage(event.target.id.replace("Button", "Page"));
        //console.log(document.getElementById(hashToID("Button")).classList.contains("activeNavItem"));
    }
}

/**
 * Aktiválja a gombot
 * @param {String} navID Gomb ID
 */
function activateNavItem(navID) {
    document.querySelectorAll(".navItem").forEach(item => {
        item.classList.remove("activeNavItem");
        item.classList.add("nonActiveNavItem");
        /*if (time >= 3) {
            item.classList.add("deactivatedNavItem");
        } else {
            time++;
        }
        console.log(time);*/
    });
    if (window.location.hash != "#Error") {
        //console.log(navID);
        document.getElementById(navID).classList.add("activeNavItem");
        document.getElementById(navID).classList.remove("nonActiveNavItem");
        document.getElementById(navID).classList.remove("deactivatedNavItem");
    }
}

/**
 * Aktiválja az oldalt
 * @param {String} pageID Oldal ID
 */
function activatePage(pageID) {
    document.querySelectorAll(".page").forEach(item => {
        item.classList.remove("activePage");
    });
    document.getElementById(pageID).classList.add("activePage");
    location.hash = pageID.replace("Page", "");
}

/**
 * Hash-ből aktiválja az oldalt és a gombot
 * @param {String} page Oldal
 * @param {String} nav Gomb
 */
function hashPageChange(page, nav) {
    //console.log(nav + "1");
    hashChange(hashToID(page), hashToID(nav));
}

/**
 * Aktiválja az oldalt és a gombot
 * @param {String} page Oldal
 * @param {String} nav Gomb
 */
function hashChange(page, nav) {
    activatePage(page);
    //console.log(nav);
    activateNavItem(nav);
    //console.log(nav);
}

/**
 * Hibakezelés, ha érvénytelen a hash. Aktiválja az ErrorPage-et és átírja az oldal címét "A parlagfű - Error!"-ra
 */
function error() {
    //location.hash = "Error";
    activatePage("ErrorPage");
    errorTitle();
    document.querySelectorAll(".navItem").forEach(item => {
        item.classList.remove("activeNavItem");
    });
}

/**
 * Kiírja konzolba a hibaüzenetet ("Error! Hash not found!")
 */
function errorMessage() {
    console.error("Error! Hash not found!");
}

/**
 * Leszedi a hash-t és a megadott típust adja hozzá, így visszaadja ID-vá alakítva
 * @param {String}  type ID típusa
 */
function hashToID(type) { 
    return window.location.hash.replace("#", "").concat(type);
}

/**
 * Átírja az oldal címét "Versfelhő - " + az ID típusának a nevére
 * @param {String}  type ID típusa
 */
function changeTitle(type) {
    document.title = "Versfelhő - " + document.getElementById(hashToID(type)).innerHTML;
}

/**
 * Átírja az oldal címét "Versfelhő - Error!"-ra
 */
function errorTitle() {
    document.title = "Versfelhő - Error!";
}
