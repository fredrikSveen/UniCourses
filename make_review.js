function registerReview(event){
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formObj = Object.fromEntries(myFormData.entries());
    let new_review = new Review(
        'webint',
        Number(formObj.teacher_score),
        Number(formObj.hardness_score),
        Number(formObj.workamount_score),
        formObj.text_review
    );
    courses[active_index].addReview(new_review);
    courses[active_index].updateScore();
    //Write to localstorage, since the reviews.js uses the localstorage as a database.
    window.localStorage.setItem('courses', JSON.stringify(courses))
    //Redirect back to reviews.js, so you see your new review there.
    window.location.href="reviews.html";
}

document.getElementById('name_course_review_list').innerHTML = courses[active_index].name_long

const form = document.getElementById('new_review_form');
form.addEventListener('submit', registerReview);