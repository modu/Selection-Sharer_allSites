var s = document.createElement('script');
s.src = chrome.extension.getURL('selection-sharer.js');

var ss = document.createElement("link");
ss.type = "text/css";
ss.rel = "stylesheet";
ss.href = "/selection-sharer.css";
document.getElementsByTagName("head")[0].appendChild(ss);

window.onload = function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    var code = '$(\'p\').selectionSharer()';
    try {
      s.appendChild(document.createTextNode(code));
      document.body.appendChild(s);
    } catch (e) {
      s.text = code;
      document.body.appendChild(s);
    }
  }

(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
