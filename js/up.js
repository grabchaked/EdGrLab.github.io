
 function up() {
    window.scrollBy(0, -100);
    if (window.pageYOffset > 0) {
        requestAnimationFrame(up);
    }
}
document.getElementById('up').addEventListener('click', function(e) {
    e.preventDefault();
    up();
}, false);
