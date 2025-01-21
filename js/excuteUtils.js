var isDark = false, isHorizontal = false;
/*
* Convert Theme
* dark <-> white
* */
var convertTheme = () => {
  if(isDark){
    isDark = false;
    replaceClassName(document, 'bg-dark', 'bg-white');
    replaceClassName(document, 'text-white', 'text-dark');
    replaceClassName(document, 'btn-light', 'btn-dark');
  } else {
    isDark = true;
    replaceClassName(document, 'bg-white', 'bg-dark');
    replaceClassName(document, 'text-dark', 'text-white');
    replaceClassName(document, 'btn-dark', 'btn-light');
  }
}
/*
* Convert rotate
* vertical <-> horizontal
* */
var convertRotate = () => {
  var container = document.querySelector('#bodyContainer');
  if(isHorizontal){
    isHorizontal = false;
    replaceClassName(container, 'col-6', 'col-12');
  } else {
    isHorizontal = true;
    replaceClassName(container, 'col-12', 'col-6');
  }
}
/*
* ClassName Replace
* as-is : ClassName(arg1)
* to-be : ClassName(arg2)
* */
var replaceClassName = (target, asIS, toBe) => {
  var targetArr = target.getElementsByClassName(asIS);
  if(targetArr != undefined){
    var length = targetArr.length;
    for(var i = length-1; i >= 0; i--) {
      var className = targetArr[i].className;
      targetArr[i].className = className.replaceAll(asIS, toBe);
    }
  }
}
/*
* XMLHttpRequest
* method : GET, POST
* */
var xhrRequest = function (method, uri, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      }
    }
  };
  xhr.open(method, uri, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(data);
}
/*
* Compile
* lib : https://closure-compiler.appspot.com/compile
* */
var compile = () => {
  var s = document.querySelector('#textareaContainer textarea').value;
  var level = document.querySelector('#selectType').value;
  if(level != ''){
    var jsonData = {
      js_code: encodeURIComponent(s),
      compilation_level: level,
      output_format: 'text',
      output_info: 'compiled_code'
    }
    xhrRequest('POST', 'https://closure-compiler.appspot.com/compile', Object.keys(jsonData).map(key => `${key}=${jsonData[key]}`).join('&'), function (e) {
      document.querySelector('#textContainer').innerText = e;
      replaceClassName(document.querySelector('#copy'),"hide","show");
    });
  } else {
    alert('You must select to Optimization!!');
  }
}
/*
* Compile
* lib : https://closure-compiler.appspot.com/compile
* */
var reset = () => {
  document.querySelector('#textareaContainer textarea').value = '';
  document.querySelector('#selectType').value = '';
  document.querySelector('#selectType').innerText = 'Optimization';
  document.querySelector('#textContainer').innerText = '';
  replaceClassName(document.querySelector('#copy'),"show","hide");
}

var copy = () => {
  var text = document.querySelector('#textContainer').innerText;
  navigator.clipboard.writeText(text);
}
