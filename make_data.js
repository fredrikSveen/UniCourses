//Generate some example data and store it to localstorage
let webint = new Course('webint', 'Interaction Design and Development of Modern Web Applications')
let review001 = new Review('webint', 4, 3, 3, 'Decent course with a good teacher.');
let review002 = new Review('webint', 2, 5, 2, 'Good course with a decent teacher.');
let review003 = new Review('webint', 4, 5, 4, 'Like it!');
webint.addReview(review001);
webint.addReview(review002);
webint.addReview(review003);
var courses = [webint];

//We write this default data to localstorage, and then we will read from localstorage when we show reviews in reviews.js
window.localStorage.setItem('courses', JSON.stringify(courses))
//To know which course to show, we will keep the index of the active course in the courses array
window.localStorage.setItem('active_index', JSON.stringify(0))

//TODO: Need to make a check where we check if courses already is in localstorage
//because now will the data be reset to default every time you open index.html