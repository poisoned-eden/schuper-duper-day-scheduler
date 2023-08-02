// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
	// TODO: Add code to apply the past, present, or future class to each time
	// block by comparing the id to the current hour. HINTS: How can the id
	// attribute of each time-block be used to conditionally add or remove the
	// past, present, and future classes? How can Day.js be used to get the
	// current hour in 24-hour time?
	//
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?
	//
	// TODO: Add code to display the current date in the header of the page.

	$('#schedule').on('click', saveHandler);

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
	
});


// ? set a timeout/interval to change the colours every hour