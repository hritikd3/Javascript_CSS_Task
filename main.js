const div = document.querySelector("#center");
const clientXValue = document.querySelector("#clientXValue");

div.addEventListener("mousemove", (event) => {
  const centerX = div.offsetLeft + div.offsetWidth / 2;

  if (event.clientX < centerX) {
    // Moving to the left
    const redShade = Math.trunc(
      ((centerX - event.clientX) / (div.offsetWidth / 2)) * 255
    );
    div.style.backgroundColor = `rgb(255, ${redShade}, 0)`;
  } else if (event.clientX > centerX) {
    // Moving to the right
    const blueShade = Math.trunc(
      ((event.clientX - centerX) / (div.offsetWidth / 2)) * 255
    );
    div.style.backgroundColor = `rgb(0, 0, ${blueShade})`;
  } else {
    // Mouse is exactly at the center
    div.style.backgroundColor = "black";
  }

  // Display clientX value on the screen
  clientXValue.textContent = `clientX: ${event.clientX}`;
  clientXValue.style.color= " purple";
  clientXValue.style.fontSize= "40px";

});

div.addEventListener("mouseleave", () => {
  // Mouse leaves the div
  div.style.backgroundColor = "white";
  div.style.border = "2px solid black";
  clientXValue.textContent = ""; // Clear the clientX value
});
