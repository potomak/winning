var h = window.location.href;
var e = document.getElementsByClassName("winning");
for(var i in e) {
  e[i].onclick = function() {
    window.location.href = "http://smood.it/home?url=" + encodeURIComponent(h);
  }
}