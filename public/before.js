window.addEventListener("beforeunload", (function(e) {
    var n = "It looks like you have been editing something. If you leave before saving, your changes will be lost.";
    return (e || window.event).returnValue = n, n
}));