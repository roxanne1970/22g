addEventListener("click", (function() {
    var e = document.documentElement;
    (e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen).call(e)
}));