/**
 * Created by tommy on 01/07/14.
 */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.write('<script src="js/vendor/minified/dom.jsPlumb-1.6.2-min.js"><\/script>')
}
else
{
    document.write('<script src="js/vendor/minified/jquery.jsPlumb-1.6.2-min.js"><\/script>')
}