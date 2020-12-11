var hasOwn = {}.hasOwnProperty;
export default function fmtClass() {
  var classList = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!arg) continue;
    var argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classList.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = fmtClass.apply(null, arg);
      if (inner) classList.push(inner);
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) classList.push(key);
      }
    }
  }

  return classList.join(' ');
}