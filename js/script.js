// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: conor-otoole
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-04/sw.js", {
    scope: "/ICS2O-Unit3-04/",
  })
}

/**
 * This function converts Fahrenheit to Celsius
 */
function enterClicked() {
  //input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  //process
  const celsius = ((fahrenheit - 32) * 5) / 9

  //output
  document.getElementById("celsius").innerHTML =
    "(" + fahrenheit + "℉ - 32) x 5/9 = " + celsius.toFixed(2) + "℃"
}
