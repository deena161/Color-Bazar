function bufferText() {
    const el = document.createElement("textarea");
    el.value = event.target.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el); 
    alert("Code will be copied...");
}

document.querySelector(".color1").addEventListener('input', () => {
    document.getElementById("scolor1").style.backgroundColor = document.querySelector(".color1").value;
    document.getElementById("sc1").innerHTML = document.querySelector(".color1").value;
})
document.querySelector(".color2").addEventListener('input', () => {
    document.getElementById("scolor2").style.backgroundColor = document.querySelector(".color2").value;
    document.getElementById("sc2").innerHTML = document.querySelector(".color2").value;
})

setInterval(() => {
    document.getElementById("change").style.backgroundImage = "linear-gradient(to right, " + document.querySelector(".color1").value + ", " + document.querySelector(".color2").value + ")";

    document.getElementById("text").innerHTML = "background-image: linear-gradient(to right, " + document.querySelector(".color1").value + ", " + document.querySelector(".color2").value + ");"

}, "100");

if(document.querySelector(".color2").value=="black"){
    document.getElementById("text").style.color = "white";
}






function navigateToPage(url) {
  window.location.href = url;
}


const btn = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.auto');

btn.addEventListener("click", () => {
  navbarLinks.classList.toggle('active');
  console.log("click")
});
