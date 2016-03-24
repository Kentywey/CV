$( document ).ready(function() {

	$('#myTabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$("#js-contact-submit").on('submit', function(event){
		event.preventDefault();
		var name = $("#js-contact-name").val();
		var mail = $("#js-contact-mail").val();
		var msg = $("#js-contact-msg").val();

		console.log(name);
		console.log(mail);
		console.log(msg);

		$.ajax({
			method: "POST",
			url: "https://getsimpleform.com/messages?form_api_token=f3a65e4f19255fc1df2e320b21f16791",
			data: { name: name, email: mail, message: msg}
		})
		.done(function( mess ) {
			$("#js-contact-msg").val('');
			$("#js-contact-name").val('');
			$("#js-contact-mail").val('');
			alert( " Message envoyé !\n Merci !" );
		});
		return false;
	});

});

