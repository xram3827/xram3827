function playMusic() {
    alert("Playing Marvin Gaye's Music!");
}
// Get the button
let mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "block";
    }
};
