var rect= document.querySelector("#center")

rect.addEventListener('mousemove', (details)=>{
    // console.log("cursor is moving ")
const rectLocation= rect.getBoundingClientRect();

console.log(details.clientX - rectLocation.left)

    // alert("yes the mouse is hovering ")
})