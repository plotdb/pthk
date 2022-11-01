(function(){
  var path, rectify;
  path = require('path');
  rectify = function(name){
    var san;
    san = path.normalize(path.sep + name.trim().replace(/[\u0000-\u001f\u0080-\u009f?:*|"']/g, '')).substring(1);
    if (!san) {
      throw new Error("illegal filename");
    }
    return san;
  };
  module.exports = import$({
    rectify: rectify
  }, path);
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
