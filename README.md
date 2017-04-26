# cubeTransition.js

a page transition effect jquery plugin. Created using Jquery, CSS 3D transforms and CSS Animations.

Idea comes from pageTransition, and I fix some bug of it, making the effect more smooth.



# Demo

[Demo page](https://html50.github.io/cubeTransition.js/)

[Another demo with animation after switching pages](https://html50.github.io/cubeTransition.js/index-dynamic.html)

Well, in my case, I copied some style sheets from [deinterfaz's pageTransitions](http://labs.deinterfaz.com/PageTransitions/transitions/bounce/). You should manage your CSS files for achieving the effect. I recommend you download the demo page and modify it for your own, it is the best way.



# Usage

**1** create some lines in a DIV with a ID name `cubeTransition`

```html
<div id="cubeTransition">
<div><h2>cubeTransition.js</h2></div>
<div><h2>Elegant,</h2></div>
<div><h2>exected!</h2></div>
<div><h2>Simple.</h2></div>
</div>
```

**2** include `cubeTransition.js` and `jquery.js`,`jquery.touchSwipe`,`wheel-indicator.js`. if you dont need mouse wheel or mobile swipe for your effect, you can delete the `EventLinstener` in `cubeTransition.js`.



**the regular way**, you can use your mouse wheel, keyborad (arrow key) and mobile swipe to control the page.

```javascript
<script src='js/jquery.min.js'></script>
<script src='js/wheel-indicator.js'></script>
<script src="js/jquery.touchSwipe.js"></script>
<script src="js/cubeTransition.js"></script>
```

**3 **done, and remember to set some style for your element.



if you dont need some control method, delete  EventLinstener` in `cubeTransition.js`.

```javascript
 //for scroll by mouse or MAC track pad
      var indicator = new WheelIndicator({
      callback: function(e){   
          if (e.direction == 'down') {
            trans('down')
          } else {
            trans('up')
          }
      }
    });
    indicator.getOption('preventMouse'); // true
//update this instead of mousewheel.js
//in issuses#2 some friend want to use this plugin on MAC track pad

//arrow key
$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up')
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down')
			}

		});
//arrow key

//mobile swipe
$(document).swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == "up") {
					trans('down')
				} else if (direction == "down") {
					trans('up')
				}
			}
		});
//mobile swipe
		
```



# Other

Feel free to contact me. Thanks.
