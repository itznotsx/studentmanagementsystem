$(document).ready(function() {
	var idcount= 0;
	$("#studentform").submit(function(event) {
		event.preventDefault();
		idcount++;
		var Surname = $("#surname").val();
		var Name = $("#name").val();
		var Gender = $("#gender:checked").val();
		var Address = $("#address").val();
		var Email = $("#email").val();
		var Phonenumber = $("#phone").val();
		
		$("#tblData tbody").append("<tr><td>" + idcount + "</td>" + 
			"<td>" + Surname + "</td>" +
			"<td>" + Name + "</td>" +
			"<td>" + Gender + "</td>" +
			"<td>" + Address + "</td>" +
			"<td>" + Email + "</td>" +
			"<td>" + Phonenumber + "</td>" +
			"<td><button class='btnEdit'>Edit</button>" +
			"<button class='btnDelete'>Delete</button></td></tr>");
		
		$(".btnEdit").bind("click", Edit);
		$(".btnDelete").bind("click", Delete);
	});
	
	function Edit() {
		var par = $(this).parent().parent();
		var tdlSurname = par.children("td:nth-child(2)");
		var tdName = par.children("td:nth-child(3)");
		var tdAddress = par.children("td:nth-child(5)");
		var tdEmail = par.children("td:nth-child(6)");
		var tdPhonenumber = par.children("td:nth-child(7)");
		var tdButtons = par.children("td:nth-child(8)");
		
		
		tdlSurname.html("<input type='text' value='" +
			tdlSurname.html() + "'>");
		tdName.html("<input type='text' value='" +
			tdName.html() + "'>");
		tdAddress.html("<input type='text' value='" +
			tdAddress.html() + "'>");
		tdEmail.html("<input type='text' value='" +
			tdEmail.html() + "'>");
		tdPhonenumber.html("<input type='text' value='" +
			tdPhonenumber.html() + "'>");	
		tdButtons.html("<button class='btnSave'>Save</button>");
		
		$(".btnEdit").bind("click", Edit);

		// Event delegation for the Save button
		$("#tblData").on("click", ".btnSave", function() {
			var par = $(this).closest("tr");
			var tdSurname = par.children("td:nth-child(2)");
			var tdName = par.children("td:nth-child(3)");
			var tdAddress = par.children("td:nth-child(5)");
			var tdEmail = par.children("td:nth-child(6)");
			var tdPhonenumber = par.children("td:nth-child(7)");
			var tdButtons = par.children("td:nth-child(8)");
	
			// Update the row with new values
			tdSurname.text(tdSurname.find("input").val());
			tdName.text(tdName.find("input").val());
			tdAddress.text(tdAddress.find("input").val());
			tdEmail.text(tdEmail.find("input").val());
			tdPhonenumber.text(tdPhonenumber.find("input").val());
	
			// Update buttons
			tdButtons.html(`
				<button class='btnEdit'>Edit</button>
				<button class='btnDelete'>Delete</button>
			`);
		});
	}
	
	function Delete() {
		var par = $(this).parent().parent();
		par.remove();
	}
	
});