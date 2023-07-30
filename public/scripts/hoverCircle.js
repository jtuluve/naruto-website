
// let circles = document.getElementsByClassName("hoverCircle");
// let mousemovefunction = function(e){
//   let mouseY = e.clientY;
//   let mouseX = e.clientX;
  
//   for(let circle of circles){
//     circle.style.width = "15px";
//     let circleY = window.scrollY + circle.getBoundingClientRect().top + ((parseInt(circle.style.width)??15))/2
//     let circleX = window.scrollX + circle.getBoundingClientRect().left+ ((parseInt(circle.style.height)||15))/2
//     let distanceY = Math.abs(mouseY - circleY)
//     let distanceX = Math.abs(mouseX - circleX)
//     let avrgDistance = (distanceY+distanceX)/2
//   console.log()
    
//   let grow = 1+(-avrgDistance/50+7)
//     circle.animate({
//     transform: grow<=1?`scale(1)`:`scale(${grow})`
//   }, {
//     duration: 1000,
//     fill: "forwards",
//     easing: "ease"
//   })
   
//   }
//  }
//  window.addEventListener('mousemove', mousemovefunction);