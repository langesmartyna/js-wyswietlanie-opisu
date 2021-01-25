let paragraf = document.getElementById("opis");

let przycisk = document.querySelector("button");

console.log(paragraf);
console.log(przycisk);


przycisk.onclick = function() {
    paragraf.textContent="opis produktu";
}



