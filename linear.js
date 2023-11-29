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
        // Get the background linear color of the clicked div
        const linearColor = getComputedStyle(colorDiv).backgroundImage;
        
        // Log the background linear color to the console
        document.getElementById("code").innerHTML = `Background : ${linearColor}`;
    });
});

function navigateToPage(url) {
    window.location.href = url;
}