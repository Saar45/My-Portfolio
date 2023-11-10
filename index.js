const textAnim = document.querySelector(".profession");

const typewriter = new Typewriter(textAnim, {
  loop: true,
});

typewriter
  .start()
  .pauseFor(200)
  .typeString("Développeur Web")
  .pauseFor(700)
  .deleteChars(15)
  .changeDeleteSpeed(70)
  .typeString("Web Designer")
  .pauseFor(500);


  AOS.init();

  // Dynamic Copyright Year
  const date = new Date();

  const year = date.getFullYear(); 
  
  document.getElementById("currentYear").innerHTML = year;