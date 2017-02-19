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

function dataMeals() {
    $.ajax({
        url: "http://localhost:3000/meals",
        type: "GET",
        success: function(result) {
          if(result){
            document.querySelector("div.ui h1").innerHTML = result
          }
        }
    })
}
