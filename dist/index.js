(function(){
  var path, sanitize;
  path = require('path');
  sanitize = function(name){
    var san;
    san = path.normalize('/' + name.trim().replace(/[\u0000-\u001f\u0080-\u009f?\\:*|"']/g, '')).substring(1);
    if (!san) {
      throw new Error("illegal filename");
    }
    return san;
  };
  module.exports = import$({
    sanitize: sanitize
  }, path);
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
