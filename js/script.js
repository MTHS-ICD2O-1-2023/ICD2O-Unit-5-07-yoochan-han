// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function calculate() {
  const userNumber = document.getElementById("get_number").value
  let answer = 0
  for (let count = 0; count <= userNumber; count++){
    answer += count
  }
  document.getElementById("Answer").innerHTML = "The answer is " + answer
} 