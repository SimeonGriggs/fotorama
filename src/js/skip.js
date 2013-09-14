var JQUERY_VERSION = $ && $.fn.jquery.split('.');

if (!JQUERY_VERSION
    || JQUERY_VERSION[0] < 1
    || (JQUERY_VERSION[0] == 1 && JQUERY_VERSION[1] < 8)) {
  window.console && console['error']('Fotorama requires jQuery 1.8 or later and will not run without it.');
  $ && $(function () {
    $('.' + _fotoramaClass).addClass(_fotoramaClass + '--noscript')
  })();
  return;
}