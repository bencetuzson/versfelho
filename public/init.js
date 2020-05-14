"use strict";

const myPages = [
  {
    hash: "#Kezdolap",
    pageId: "KezdolapPage",
    navId: "KezdolapButton",
  },
  {
    hash: "#Tuzsi",
    pageId: "TuzsiPage",
    navId: "TuzsiButton",
  },
  {
    hash: "#Info",
    pageId: "InfoPage",
    navId: "InfoButton",
  },
  {
    hash: "#Error",
    pageId: "ErrorPage",
  },
];

function hashToPage(hash) {
  let page = myPages.find(elem => elem.hash == hash );
  if (page) {
    return page;
  } else {
    return {
      hash: "#Error",
      pageId: "ErrorPage",
    }
  };
};

function onHashChange() {
    console.log(window.location.hash);
    let page = hashToPage(window.location.hash);
    if (page.pageId == "ErrorPage") {
      window.location.hash = "#Error";
    }
    if (page.navId) {
      activateNavItem(page.navId);
    };
    activatePage(page.pageId);
};
