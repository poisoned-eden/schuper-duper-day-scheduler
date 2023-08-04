$(function () {

	let time = dayjs().format('HH:mm');
	let hour = dayjs().format('HH');

	$('#currentTime').text(time);


	for (let i = 9; i < 18; i++) {
		let tense;
		let hourLabel = `hour-${i}`;
		
		if (i < hour) {
			tense = 'past';
		} else if ( i == hour ) {
			tense = 'present';
		} else {
			tense = 'future';
		}

		let savedBlockData = localStorage.getItem(hourLabel);
		if ( savedBlockData == null ) {
			savedBlockData = ''
		}

		let newTimeBlock = $(`
			<div id="${hourLabel}" class="row time-block ${tense}">
        		<div class="col-2 col-md-1 hour text-center py-3">${i}</div>
					<textarea class="col-8 col-md-10 description" rows="3">${savedBlockData}</textarea>
					<button class="btn saveBtn col-2 col-md-1" aria-label="save">
						<i class="fas fa-save" aria-hidden="true"></i>
					</button>
      			</div>`);
	  
	  $('#schedule').append(newTimeBlock);
	}
  
	function saveHandler(event) {
		let clickedEl = $(event.target);

		let parentDivEl = clickedEl.parents("div:first");
	
		let timeBlock = parentDivEl.attr('id');
	
		let blockInput = parentDivEl.children('textarea').val();
	
		localStorage.setItem(timeBlock, blockInput);
	}
	
  $('#schedule').on('click', saveHandler);
});