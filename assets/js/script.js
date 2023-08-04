// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?
	//
	// TODO: Add code to display the current date in the header of the page.

	let date = dayjs().format('MMM D, YYYY');
	let time = dayjs().format('hh:mm');
	let hour = dayjs().format('HH');
	let hourAMPM = dayjs().format('HH A');
	$('#currentDay').text(date);
	$('#currentTime').text(time);


	for (let i = 9; i < 18; i++) {
		let tense;
		
		if (i < hour) {
			tense = 'past';
		} else if ( i == hour ) {
			tense = 'present';
		} else {
			tense = 'future';
		}

		let newTimeBlock = $(`<div id="hour-${i}" class="row time-block ${tense}">
        <div class="col-2 col-md-1 hour text-center py-3">${i}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`)
	  
	  $('#schedule').append(newTimeBlock);
	}
  
	function saveHandler(event) {
	console.log(this);
	
		console.log(event.target);
		let clickedEl = $(event.target);

		let parentDivEl = clickedEl.parents("div:first");
		console.log(parentDivEl);

		let timeBlock = parentDivEl.attr('id');
		console.log(timeBlock);

		let blockInput = parentDivEl.children('textarea').val();
		console.log('input '+ blockInput);

		localStorage.setItem(timeBlock, blockInput);
		console.log('ls ' + localStorage.getItem(timeBlock));
	
	}
	
  $('#schedule').on('click', saveHandler);
});


// ? set a timeout/interval to change the colours every hour