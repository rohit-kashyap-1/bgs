 gsap.registerPlugin(ScrollTrigger)

 const box = document.querySelector(".logo");
 window.addEventListener('scroll', () => {
    // Get the scroll position (amount scrolled in pixels)
    const scrollPosition = window.scrollY;

    // Calculate scale based on scroll position
    // Starting from scale(11) and reducing by 1 for every 100px scrolled
    let scaleValue = Math.max(1, 11 - scrollPosition / 32); // Scale down every 100px scrolled

    // Apply the calculated scale value to the box element
    console.log(scaleValue)
    if(scaleValue>1){
        gsap.to(box, { scale: scaleValue,x:100,y:-65 });
    }else{
        gsap.to(box, { scale: scaleValue,x:0,y:0 });
    }
    
  });