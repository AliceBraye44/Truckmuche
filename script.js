const message = "Merci pour votre message!  \n \n Je vous repondrai dans les plus bref délais.  \n Truckemuchement votre,  \n \n Marc"



  document.getElementById("contactForm").addEventListener('submit', function(event) {
    event.preventDefault();
    alert(message);
  });
