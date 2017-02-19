
function dataHeading() {
  if(document.querySelector("div.ui h1").innerHTML=="Maintain State"){
    document.querySelector("div.ui h1").innerHTML = $("div.ui button").attr("data")
  }else{
    document.querySelector("div.ui h1").innerHTML = "Maintain State"
  }

}
