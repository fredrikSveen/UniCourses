//Show all reviews for the active course
courses[active_index].showReviews();

//Hide "Make new review"-button, if not logged in
var loggedin = JSON.parse(localStorage.getItem('loggedin'));
if (!loggedin){
    var hide = document.getElementById('make_review_btn').style.display = 'none';
}else{
    var hide = document.getElementById('make_review_btn').style.display = 'block';
}