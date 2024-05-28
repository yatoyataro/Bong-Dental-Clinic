document.addEventListener("DOMContentLoaded", function() {
  const testimonies = document.querySelectorAll(".grid-container .grid-box");
  const showMoreButton = document.getElementById("show");
  let showingAll = false;

  
  for (let i = 6; i < testimonies.length; i++) {
    testimonies[i].classList.add("hidden");
  }

  showMoreButton.addEventListener("click", function() {
    if (showingAll) {
    
      for (let i = 6; i < testimonies.length; i++) {
        testimonies[i].classList.add("hidden");
      }
      showingAll = false;
      showMoreButton.textContent = "Show More";
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      
      for (let i = 6; i < testimonies.length; i++) {
        testimonies[i].classList.remove("hidden");
      }
      showingAll = true;
      showMoreButton.textContent = "Show Less";
    }
  });
});



