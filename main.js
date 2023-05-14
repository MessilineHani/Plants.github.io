const image_container = document.getElementById("plants-images");
for (let i = 1  ; i <= 9; i++){
    let img = document.createElement("div");
    img.setAttribute("class", "plant-img");
    image_container.appendChild(img);
    console.log(img.style.width)
    img.style.backgroundImage = `url(/footage/images/box-${i}.jpg`;
}
