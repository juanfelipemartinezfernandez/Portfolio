function goToIt(){
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  scrollTo({
    top:vh,
    behavior: "smooth"
    });
  
}
for (let i = 0; i < document.querySelectorAll(".little_boxes").length; i++) {
    
    document.querySelectorAll(".little_boxes")[i].addEventListener("click", function(){
    document.querySelectorAll(".little_boxes")[i].classList.add("hide");
    document.querySelectorAll(".little_boxes")[i].classList.add("show");
    
  });
  
}

// Code to know and apply effect when item enters on screen//

// Select the element to watch
const elementToWatch = document.querySelector('.idioma2');

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // Margin around the root (optional)
  threshold: 0.5 // Percentage of element visible to trigger callback
};

// Callback function when element enters or exits the viewport
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elementToWatch.classList.add("widht");
      document.querySelector(".idioma").classList.add("widht1");
      
      // Perform actions when the element enters the viewport
    } else {
      // Element has exited the viewport
      elementToWatch.classList.remove("widht");
      document.querySelector(".idioma").classList.remove("widht1");
      // Perform actions when the element exits the viewport
    }
  });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(callback, options);

// Start observing the element
observer.observe(elementToWatch);

// Codigo para cambiar comportamiento barras de idioma cuando screen 600px\

function modificarTextoSegunAncho() {
  const elementoTexto = document.getElementById('texto-modificable');
  if (window.innerWidth <= 600) {
    elementToWatch.innerHTML = "<a href='https://www.efset.org/cert/6XLnDw'>English(85%)</a>";
    document.querySelector(".email").innerHTML = "Email: juanfelipe.martinez<br>.fernandez@gmail.com"
  } else {
    document.querySelector(".email").innerHTML = "Email: juanfelipe.martinez.fernandez@gmail.com"
  }
}
// Ejecuta la función inicialmente
modificarTextoSegunAncho();

// Agrega un evento resize para seguir verificando el tamaño de la ventana
window.addEventListener('resize', modificarTextoSegunAncho);
