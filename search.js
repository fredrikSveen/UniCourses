function searchFunction() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("courses");
	tr = table.getElementsByTagName("tr");

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
		  txtValue = td.textContent || td.innerText;
		  if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		}
	  }
}

function searchECTSF() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchECTS");
  filter = input.value.toUpperCase();
  table = document.getElementById("courses");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[2];
	if (td) {
	  txtValue = td.textContent || td.innerText;
	  if (txtValue == filter || filter == '') {
		tr[i].style.display = "";
	  } else {
		tr[i].style.display = "none";
	  }
	}
  }
}

function searchScoreF() {
  console.log('hi');
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchScore");
  filter = input.value.toUpperCase();
  table = document.getElementById("courses");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[3];
	if (td) {
	  txtValue = td.textContent || td.innerText;
	  console.log(txtValue);
	if (txtValue >= filter){
		tr[i].style.display = "";
	  } else {
		tr[i].style.display = "none";
	  }
	}
  }
}	