var throttle = require('throttle');

function updateElementClasses(mqClasses) {
  mqClasses.forEach(function(obj){
    var el = obj.el;
    var classes = obj.classes;
    if( window.matchMedia(obj.query).matches ) {
      el.classList.add.apply(el.classList, classes);
    }
    else {
      el.classList.remove.apply(el.classList, classes);
    }
  });
}

function parseElements(els, mqAttr) {
  var mqClasses = [];
  Array.prototype.forEach.call(els, function(el) {
    var attr = el.getAttribute(mqAttr);
    attr.split(',').forEach(function(str){
      str = str.split('>');
      var classes = str[0].trim().split(' ');
      var query = str[1].trim();
      mqClasses.push({
        el: el,
        classes: classes,
        query: query
      });
    });
  });
  return mqClasses;
}

module.exports = function(els, options) {
  if( !("matchMedia" in window) ) {
    return null;
  }
  els = els || document.querySelectorAll('[data-mq-class]');
  options = options || {};
  var classes = parseElements(els, options.attr || 'data-mq-class');
  updateElementClasses(classes);
  var callback = throttle(updateElementClasses.bind(null, classes), 500);
  window.addEventListener('resize', callback);
  return callback;
};