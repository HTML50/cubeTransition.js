(function($) {

	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
		$('#cubeTransition>div:eq(0)').addClass('visible');

	for (i = 0; i < length; i++) {
		var bullet = $("<li></li>");
		if (i == 0) bullet.addClass('active');
		$("#bullets").append(bullet);
	}

	function openIndex(i) {
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut' : 'rotateCubeTopOut'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show()
		}
	}

	function trans(direction) {
		if (!onGoing) {
			onGoing = true;
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut';
				inClass = 'rotateCubeBottomIn';
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut';
				inClass = 'rotateCubeTopIn';
			}
			show();
		}
	}

	function show() {
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass('visible');
		$('#cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);	
		$('#bullets>li:eq(' + (current - 1) + ')').removeClass('active');
		$('#bullets>li:eq(' + (next - 1) + ')').addClass('active');
		setTimeout(function() {
			
		},50)
		
		animationOut(current - 1)
		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass('visible');
		}, 500)

		setTimeout(function() {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			
			animationIn(next - 1)
			current = next;
			onGoing = false;
		}, 600)
	}

	$(document).ready(

	function() {
    
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


		$(document).keydown(function(e) {
			if (e.keyCode == 38 || e && e.keyCode == 37) {
				trans('up')
			}
			if (e.keyCode == 39 || e && e.keyCode == 40) {
				trans('down')
			}

		});

		$(document).swipe({
			swipe: function(event, direction, distance, duration, fingerCount) {
				if (direction == "up") {
					trans('down')
				} else if (direction == "down") {
					trans('up')
				}
			}
		});


		$('#bullets>li').on('click', function() {
			openIndex($(this).index() + 1);
		});

	});
})(jQuery);