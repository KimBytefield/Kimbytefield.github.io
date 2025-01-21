var convertType = "";
var excuteConvert = () => {
  switch (convertType) {
    case "url":
      excuteUrl();
      break;
    case "script":
    case "documnet":
    default:
      excuteScript();
      break;
  }
};
var excuteUrl = () => {
  var s = document.querySelector('#textareaContainer textarea').value;
  var f = document.querySelector('#iframeContainer iframe');
  var ifrm = document.createElement('iframe');
  ifrm.src = encodeURIComponent(s);
  ifrm.width = "100%";
  ifrm.height = "100%";
  ifrm.style = "position: fixed;top: 0;left: 0;border: none;z-index:99999";
  f.src = s;
};
var excuteScript = () => {
  var s = document.querySelector('#textareaContainer textarea').value;
  var f = document.querySelector('#iframeContainer iframe');
  var innerDocument = '<html><head><script src="https://code.jquery.com/jquery-latest.min.js"><\/script></head><body>';
  innerDocument += s;
  innerDocument += '</body>';

  f.contentDocument.write(innerDocument);
  f.contentDocument.close();
};


var selectTYpe = (text) => {
  document.querySelector('#selectType').innerText = text;
  document.querySelector('#selectType').value = text;
  convertType = text;
};
