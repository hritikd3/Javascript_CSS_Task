// const rect = document.querySelector("#center");

// rect.addEventListener("mousemove", function (details) {
//   const rectLocation = rect.getBoundingClientRect();

//   const insideRectangeValue = Math.trunc(details.clientX - rectLocation.left);

//   if (insideRectangeValue < rectLocation.width / 2) {
//     var redcolor = gsap.utils.mapRange(
//       0,
//       rectLocation.width / 2,
//       255,
//       0,
//       insideRectangeValue
//     );
//     gsap.to(rect, {
//       backgroundColor: `rgb(${redcolor},0,0),
//     ease: Power4`,
//     });
//     // console.log("ew");
//   } else {
//     var bluecolor = gsap.utils.mapRange(
//       rectLocation.width / 2,
//       rectLocation.width,
//       0,
//       255,
//       insideRectangeValue
//     );
//     gsap.to(rect, {
//       backgroundColor: `rgb(${bluecolor},0,0),
//     ease: Power4`,
//     });
// // console.log("Ds")
//   }

// });



// rect.addEventListener("mouseleave",()=>{
//   gsap.to(rect,{
//     backgroundColor: 'white'
//   })
// })

const div = document.querySelector("#center");

div.addEventListener("mousemove", (event) => {
  const centerX = div.offsetLeft + div.offsetWidth / 2;

  if (event.clientX < centerX) {
    // Moving left of the center
    div.style.backgroundColor = `rgb(255, ${Math.trunc(
      (event.clientX / centerX) * 255
    )}, 0)`;
  } else {
    // Moving right of the center
    const blueShade = Math.trunc(
      255 - ((event.clientX - centerX) / (div.offsetWidth / 2)) * 255
    );
    div.style.backgroundColor = `rgb(0, 0, ${blueShade})`;
  }
});
