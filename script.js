
const button = document.getElementById("buttonChangeColor");
const slider = document.querySelector("input[name='redSlider']");

// Random background color button
button.addEventListener("click", function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// Slider changes the background color
slider.addEventListener("input", function () {
    const red = slider.value;

    document.body.style.backgroundColor = `rgb(${red}, 150, 200)`;
});
