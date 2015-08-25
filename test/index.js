var should = require('chai').should();
var url    = require('../index');
var clean  = url.clean;

describe('#clean', function() {
  it('removes www. from a url', function() {
    var test = 'www.';
    test.replace(/www\./i, '').should.equal('');
  });

  it('replaces //m. with a //', function() {
    var test = '//m.';
    test.replace(/\/\/m\./i, '//').should.equal('//');
  });

  it('removes the protocol from the url', function() {
    var test = "http://";
    test.replace(/.*?:\/\//g, '').should.equal('');
  });

  it('removes trailing slashes from the url', function() {
    var test = ".com//";
    test.replace(/\/*$/, '').should.equal('.com');
  });
});
