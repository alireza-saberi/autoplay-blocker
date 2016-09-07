/*
* @Author: Ali
* @Date:   2016-09-07 15:35:01
* @Last Modified by:   Ali
* @Last Modified time: 2016-09-07 15:38:13
*/

'use strict';
var arVideo = document.getElementsByTagName('video');
for (var i = 0; i < arVideo.length; i++ ) {
    var frame = arVideo[i];
    frame.autoplay = false;
}