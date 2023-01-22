let adults=23;
let children=1;



if(adults<0){
    adults=0;
};

if(children<0){
    children=0;
};



function calc(adults,children ){
  return  adults*12 + children*6;
}

let price= calc(adults,children );




for(let i=1; i<=adults; i++) {
  
}


window.onload = function() {
  let btn = document.getElementById("BuyBtn");
  btn.onclick = function() {
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;
    let price = calc(adults, children);
    alert("$" + price);
  }
}