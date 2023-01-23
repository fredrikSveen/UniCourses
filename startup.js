let webint = new Course('webint', 'Interaction Design and Development of Modern Web Applications')
let review001 = new Review('webint', 4, 3, 3, 'Decent course with a good teacher.');
let review002 = new Review('webint', 2, 5, 2, 'Good course with a decent teacher.');
let review003 = new Review('webint', 4, 5, 4, 'Like it!');
webint.addReview(review001);
webint.addReview(review002);
webint.addReview(review003);