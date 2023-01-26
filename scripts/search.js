function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
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

function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
}

var eurecom = new Uni('EURECOM');
var ntnu = new Uni('NTNU');
var harvard = new Uni('Harvard');

var unis = [eurecom, ntnu, harvard];

for (var i = 0, l = courses3.length; i < l; i++) {
    courses3[i].showCourse();
}

var change_title = document.getElementById('uni_title').innerHTML = unis[uni_courses_index].name;