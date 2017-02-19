function dataHeading() {
    if (document.querySelector("div.ui h1").innerHTML == "Maintain State") {
        document.querySelector("div.ui h1").innerHTML = $("div.ui button").attr("data")
    } else {
        document.querySelector("div.ui h1").innerHTML = "Maintain State"
    }
}

function skill() {
    document.getElementById("listbtn").innerHTML = `<button onclick="dataURL()" data="Change Data Heading" class="ui teal button">Skill Submit</button>`
}

function pagehome() {
    document.getElementById("listbtn").innerHTML = `<button onclick="dataHeading()" data="Change Data Heading" class="ui teal button">Data-Heading</button>`
}

function pagemeals() {
    document.getElementById("listbtn").innerHTML = `<button onclick="dataMeals()" data="Change Data Heading" class="ui teal button">Data-Meals</button>`
}

function dataURL() {
    if (document.querySelector("div.ui h1").innerHTML == "Maintain State") {
        document.querySelector("div.ui h1").innerHTML = document.URL
    } else {
        document.querySelector("div.ui h1").innerHTML = "Maintain State"
    }
}

$(document).ready(function() {
  $.ajax({
      url: "http://localhost:3000/meals",
      type: "GET",
      success: function(result) {
          sessionStorage.setItem('meals',result)
      }, error: function(err) {
          console.log(err);
      }
  })
})


function dataMeals() {
  var meals = sessionStorage.getItem("meals").split(",")
  var random = Math.floor(Math.random()*9)
  document.querySelector("div.ui h1").innerHTML = meals[random]
}
