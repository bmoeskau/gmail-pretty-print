/**
 * Starting point for loading jQuery: http://stackoverflow.com/a/9624997/108348
 * Tested on Chrome 29 + Gmail as of Oct 18, 2013
 */
window.gmpp=function($){
  $=window.jQuery;
  if(!$){
    setTimeout(function(){
      gmpp();
    },100);
    return;
  }
  $('table').first().hide();
  $('hr').hide();
  $('.maincontent > table').first().hide();
  $('.message tr').first().hide();
  $($('.message tr')[1]).hide();
  $('body').attr('style', 'margin:0;');
};
if(!window.jQuery){
  (function(d,s){
    s=d.createElement('script');
    s.src='https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js';
    (d.head||d.documentElement).appendChild(s);
  })(document)
}
gmpp();