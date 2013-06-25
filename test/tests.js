describe("Media Query Classes", function(){

  var classes = require('mq-class');
  var assert = require('assert');

  beforeEach(function(){
    this.target = document.querySelector('#fixture');
    this.els = document.querySelectorAll('[data-mq-class]');
  });

  it('should should add and remove classes to elements using media queries', function(){
    classes(this.els);
    assert( this.target.className === "pass", this.target.className + " doesnt equal 'pass'" );
  });

  it('should use a custom attribute', function(){
    classes(this.els, {
      attr: 'media-class'
    });
    assert( this.target.className === "pass", this.target.className + " doesnt equal 'pass'" );
  });

});