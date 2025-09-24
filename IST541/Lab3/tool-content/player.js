/* Minimal slide controller for the blank shell */
(function(){
  const slides = Array.from(document.querySelectorAll(".slide"));
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressText = document.getElementById("progressText");
  const slideTitle = document.getElementById("slideTitle");

  let idx = 0;

  function show(i){
    idx = Math.max(0, Math.min(slides.length-1, i));
    slides.forEach((s, n)=>{
      s.hidden = (n !== idx);
    });
    progressText.textContent = `Slide ${idx+1} of ${slides.length}`;
    slideTitle.textContent = slides[idx].dataset.title || `Slide ${idx+1}`;
    // Manage button disabled state
    prevBtn.disabled = (idx === 0);
    nextBtn.disabled = (idx === slides.length-1);
  }

  prevBtn.addEventListener("click", ()=> show(idx-1));
  nextBtn.addEventListener("click", ()=> show(idx+1));

  // Keyboard support: Left/Right arrows and Space/Enter on focused button
  document.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowRight") { show(idx+1); }
    if (e.key === "ArrowLeft")  { show(idx-1); }
  });

  // Initialize
  show(0);
})();
