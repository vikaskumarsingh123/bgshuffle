/*
USAGE
-----------------------------
Note: Requires jQuery and jQueryUI to be included in the page


Simple Usage:
shuffleBG( ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'] ); //the array of wallpapers

Advanced Usage:
shuffleBG(['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'], //the array of wallpapers
        '10000', //time between wallpaper change, defaults to 10000ms (10secs)
        '1000', //fade in fade out animation speed, defaults to 1000ms
        'white' //color to fade in and out of, defaults to body backgroundColor or white if no background color specified
);

You will usually need to call these function on document load. If you are not familiar with JS at all, just include the following script block in your header:

<script type='text/javascript'>
	$(document).ready(function(){
        shuffleBG(['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']); 
	});
</script>

AUTHOR: Vikas Kumar Singh
CIRCA: 2017
There is no licensing, you are free to use it anyway you like or sell it! I hope you make a forture!

*/


function shuffleBG(bg_arr,timer,speed,bg_color){
                    if(bg_arr=='pause' && intID!=='') clearInterval(intID);
                    var newbgurl=''; var tmp='';
                    
                    function thechangeFN(){
                        newbgurl = bg_arr[Math.floor(Math.random() * bg_arr.length)];
                        console.log('bgshuffle changing page background to ' + newbgurl);
                        tmp = new Image();
                        $('body').append($('<div/>', {
                            id: 'fullPage',
                            style: 'width:100%;height:100%;background-color:transparent;position:absolute;top:0;right:0;z-index:-1;'
                        }));
                        
                        tmp.onload = function() {
                            setTimeout(function () {
                                
                            $('#fullPage').animate({
                                backgroundColor: 'transparent'
                            }, (speed ? speed : '1000'), 'swing', function(){
                                $('#fullPage').remove();
                            });
                            
                            $('body').css('backgroundImage','url(' + newbgurl + ')');
                                
                        }, (speed ? speed : '1000'));
                        };
                        
                        tmp.src = newbgurl;
                        
                        $('#fullPage').animate({
                            backgroundColor: ( bg_color ? bg_color : (window.getComputedStyle(document.body, null).backgroundColor ? window.getComputedStyle(document.body, null).backgroundColor : 'white') )
                        }, (speed ? speed : '1000'));
                    }
                    thechangeFN();
                    var intID = setInterval( function(){ thechangeFN(); }, (timer ? timer : 10000) );
}
				
