# bgshuffle
Shuffles the background image of the page. Made using jQueryUI and background changes have a fade in and fade out effect.

Note: Requires jQuery and jQueryUI to be included in the page


Simple Usage:
shuffleBG( ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] ); //the array of wallpapers

Advanced Usage:
shuffleBG(['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'], //the array of wallpapers
        '10000', //time between wallpaper change, defaults to 10000ms (10secs)
        '1000', //fade in fade out animation speed, defaults to 1000ms
        'white' //color to fade in and out of, defaults to body backgroundColor or white if no background color specified
);

You will usually need to call these function on document load. If you are not familiar with JS at all, just include the following script block in your header and make sure the images are lying in the same folder as your HTML page:

<script type='text/javascript'>
	$(document).ready(function(){
        shuffleBG(['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']); 
	});
</script>


HOW IT WORKS
-------------------------------------
Creates a pseudo div element with id 'fullPage' and then fades it into view. Changes the background, and when the background is fully loaded, fadesOut the 'fullPage' element. Then deletes the pseudo element.
