let title = document.title;
var intervalTimer = null;
window.addEventListener("blur", function() {
    intervalTimer = setInterval(function() {
        document.title = "👋👨‍💻";
    }, 3000);
});
window.addEventListener("focus", function() {
    clearInterval(intervalTimer);
    document.title = title;
});
