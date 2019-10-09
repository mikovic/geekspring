$(document).ready(function() {
    $('.removeBtn').on('click', function(event) {
		var studentId = $(this).attr('entryIndex');
		$.get("/students/remove/" + studentId);
		location.reload();
	});

	$('#consoleTestBtn').on('click', function(event) {
		console.log($('#myInput').val());
	});

	$('#testBtn').on('click', function(event) {
        event.preventDefault();
        console.log('111' + 2);
		$.get("/hello").done(function() {
		    alert("AAA");
		});
	});

    $('.myTableRow').on('click', function(event) {
                            // event.preventDefault();
                            console.log($(this).attr('entryIndex'));
                    	});

	$('.table .editBtn').on('click', function(event) {
		event.preventDefault();
		var href = $(this).attr('href');		
		$.get(href, function(book, status) {
			$('.myForm #id').val(book.id);
			$('.myForm #title').val(book.title);
			$('.myForm #author').val(book.author);
		});		
		$('.myForm #editModal').modal();
	});
	
	$('.addNewBookBtn').on('click', function(event) {
		event.preventDefault();		
		var href = $(this).attr('href');		
		$.get(href, function(book, status) {
			$('.myForm #id').val(book.id);
			$('.myForm #title').val(book.title);
			$('.myForm #author').val(book.author);
		});	
		$('.myForm #editModal').modal();
	});



});