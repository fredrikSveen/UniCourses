
function chooseUni(uni_index){    
    window.localStorage.setItem('uni_courses_index', JSON.stringify(uni_index))
}

function searchFunction() {
	// Declare variables
	var input, filter,  i, txtValue;
	input = document.getElementById("search_input");
	filter = input.value.toUpperCase();
	uni_box = document.getElementById("unis_list");
	uni_a = uni_box.getElementsByTagName("a");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < uni_a.length; i++) {
        txtValue = uni_a[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            uni_a[i].style.display = "";
        } else {
            uni_a[i].style.display = "none";
        }
	}
}

for (var j = 0, m = unis.length; j < m; j++) {
    let div1 = document.createElement('div');
        div1.setAttribute('class', 'flex_container');
        div1.setAttribute('onClick', `chooseUni(${j})`);
        div1.innerHTML = `
            <a id="uni_btn" href="templates/search.html">${unis[j].name}</a>
        `;
        document.getElementById('unis_list').appendChild(div1);
}