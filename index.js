/**
 * Clean's up a URL, removes www, protocol and trailing slashes
 *
 * @param  {String} url
 * @return {String}
 */

module.exports = {

  clean: function(url) {

    url = url.replace(/www\./i, '');
    url = url.replace(/\/\/m\./i, '//');
    url = url.replace(/.*?:\/\//g, '');
    url = url.replace(/\/*$/, '');

    return String(url);
  }
};
