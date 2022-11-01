require! <[path]>

rectify = (name) ->
  san = path.normalize(path.sep + name.trim!replace /[\u0000-\u001f\u0080-\u009f?:*|"']/g, '').substring(1)
  if !san => throw new Error("illegal filename")
  return san

module.exports = {rectify} <<< path
