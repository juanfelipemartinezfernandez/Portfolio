function goToIt(){
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  scrollTo({
    top:vh+50,
    left:110,
    behavior: "smooth"
    });
  
}
for (let i = 0; i < document.querySelectorAll(".little_boxes").length; i++) {
    
    document.querySelectorAll(".little_boxes")[i].addEventListener("click", function(){
    document.querySelectorAll(".little_boxes")[i].classList.add("hide");
    document.querySelectorAll(".little_boxes")[i].classList.add("show");
    
  });
  
}
