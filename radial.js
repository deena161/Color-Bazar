function bufferText() {
    const el = document.createElement("textarea");
    el.value = event.target.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el); 
    alert("Code will be copied...");
}

document.querySelector(".colors").addEventListener("click",()=>{
   
})



document.querySelectorAll(".colors").forEach((colorDiv) => {
    colorDiv.addEventListener("click", () => {
        const linearColor = getComputedStyle(colorDiv).backgroundImage;
        
        document.getElementById("code").innerHTML = `Background : ${linearColor}`;
    });
});


function navigateToPage(url) {
    window.location.href = url;
}