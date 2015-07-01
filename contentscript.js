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












//var jq = document.createElement('script');
//jq.onload = function(){};
//jq.src = "https://code.jquery.com/jquery-2.1.1.min.js";
//document.querySelector('head').appendChild(jq);

//var s = document.createElement('script');
//s.src = chrome.extension.getURL('selection-sharer.js');
//document.body.appendChild(s);
//(document.head||document.documentElement).appendChild(s);

//var ss = document.createElement("link");
//ss.type = "text/css";
//ss.rel = "stylesheet";
//ss.href = chrome.extension.getURL("selection-sharer.css");
//document.getElementsByTagName("head")[0].appendChild(ss);

//var code = "$(\'p\').selectionSharer();";
//var script = document.createElement("script");
//script.setAttribute("type", "text/javascript");
//script.appendChild(document.createTextNode(code));
//document.body.appendChild(script);

//window.onload = function() {
//    var s2 = document.createElement('script');
 //   s2.type = 'text/javascript';
	//s2.link = 'selection-sharer.js'

//	var s3 = document.createElement('script');
//	s3.src = chrome.extension.getURL('jquery-2.1.4.min.js');
//	(document.head||document.documentElement).appendChild(s3);
	
   // try {
     // s2.appendChild(document.createTextNode(code));
      //document.body.appendChild(s2);
    //} catch (e) {
     // s2.text = code;
      //document.body.appendChild(s2);
   // }
 // }
	
//s.onload = function() {
//    s.parentNode.removeChild(s);
//};



