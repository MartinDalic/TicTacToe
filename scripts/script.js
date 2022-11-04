/**********************************************************
 * <body onload="start()">
//*********************************************************/

async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

let date = new Date();

function getCurrentYear() {
  document.getElementById("copyDate").innerHTML = ` ${date.getFullYear()} `;
}


function start() {
  render();
  getCurrentYear();
}
/*========*/
/**********************************************************
 * GLOBAL FUNCTIONS 
//*********************************************************/
//----------------------------------------------------------------
function numberFormat(locales, number) {
  // const price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: "EUR",
  }).format(number);
}

function numberFormatDe(number) {
  return numberFormat("de-DE", number);
}

//----------------------------------------------------------------
// save Array To LocalStorage
function setArray(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

// load Array FromLocal Storage
function getArray(key) {
  return JSON.parse(localStorage.getItem(key));
}

// load STRING from LocalStorage,
// parse and assign to ARRAY ONLY if it is valid
function getValidArray(key, array) {
  let strKey = localStorage.getItem(key);
  if (typeof strKey === "string") {
    array = JSON.parse(strKey);
  }
}

// Return the ARRAY from >>not empty<< LocalStorage else
// return the InitArray
function getValidInitArray(key, initArray) {
  let strKey = localStorage.getItem(key);
  if (typeof strKey === "string") {
    return getArray(key);
    // return JSON.parse(strKey);
    // return JSON.parse(localStorage.getItem(key));
  } else {
    return initArray;
  }
}

//----------------------------------------------------------------
// LENGTH leading zeros will get added to the string
// LENGTH = targetLength - num.toString().length
function padWithZero(num, targetLength) {
  return String(num).padStart(targetLength, "0");
}

function defArrayWithFor(prefixName, count, array) {
  array = [];
  for (let i = 0; i < count; i++)
    array.push(`${prefixName}_${padWithZero(i,3)}.jpg`);
}

function defArrayWithFor(prefixName, count) {
  images = [];
  for (let i = 0; i < count; i++)
    images.push(`${prefixName}_${padWithZero(i, 3)}.jpg`);
}
/*========*/
