const sentButton = document.getElementById("sentButton");
sentButton.onclick = function() {
    event.preventDefault();
    prompt("Merci pour votre message ! ");

};

const scrollOn = document.getElementById("cRetour");
scrollOn.onclick = function scrollWindow()
{
window.top.window.scrollTo(0,0)
};