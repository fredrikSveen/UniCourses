class Review { 
    constructor(course_short, teacher_score, hardness_score, workamount_score ,text_review){
        this.course_short = course_short
        this.teacher_score = teacher_score
        this.hardness_score = hardness_score
        this.workamount_score = workamount_score
        this.text_review = text_review
        this.score = Math.round(((teacher_score + hardness_score + workamount_score)/3 + Number.EPSILON) * 100) / 100;
        const d = new Date;
        this.date = d.toDateString();
    };
    displayReview() {
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'test');
        div1.innerHTML = `
            <div class='flex_container' style='border-bottom-style: solid;'>
                <p>Teacher score: ${this.teacher_score}</p>
                <p>Hardness score: ${this.hardness_score}</p>
                <p>Workamount score: ${this.workamount_score}</p>
                <p>Text review: ${this.text_review}</p>
                <p>Overall score: ${this.score}</p>
                <p>Written: ${this.date}</p>
            </div>
        `;
        document.getElementById('review_container').appendChild(div1);
    }
}

class Course {
    constructor(name_short, name_long, ects) {
        this.name_short = name_short;
        this.name_long = name_long;
        this.ects = Number(ects);
        this.reviews = [];
        this.avg_score;
    }
    addReview(review){
        this.reviews.push(review)
    }
    showReviews(){
        document.getElementById('name_course_review_list').innerHTML = this.name_long;
        for (var i = 0, l = this.reviews.length; i < l; i++) {
            var obj = this.reviews[i];
            obj.displayReview()
        }
    }
    updateScore(){
        let tmp_sum = 0;
        let num_reviews = this.reviews.length;
        for (var i = 0, l = num_reviews; i < l; i++) {
            var obj = this.reviews[i];
            tmp_sum = tmp_sum + this.reviews[i].score
        }
        this.avg_score = Math.round(((tmp_sum/num_reviews) + Number.EPSILON) * 100) /100;
    }
    showCourse(){
        let tr1 = document.createElement('tr');
        let indx = this.getIndex()
        tr1.setAttribute('onClick', `change_active(${indx})`);
        tr1.innerHTML = `
            <td>${this.name_long}</td>
            <td>${this.name_short}</td>
            <td>${this.ects}</td>
            <td>${this.avg_score}</td>
        `;
        document.getElementById('courses_table').appendChild(tr1);
    }
    getIndex(){
        return courses.indexOf(this);
    }
}

function change_active (courses_index) {
    window.localStorage.setItem('active_index', JSON.stringify(courses_index))
    window.location.href="reviews.html";
}

//When you just parse an object from localstorage, you lose the original class methods so here we "get them back"
function parseLocalstorage(unparsed){
    var raw = JSON.parse(unparsed)
    var courses = []
    for (var i = 0, l = raw.length; i < l; i++) {
        let name_short = raw[i].name_short;
        let name_long = raw[i].name_long;
        let ects = raw[i].ects;
        var course = new Course(name_short, name_long, ects)
        
        for (var j = 0, m = raw[i].reviews.length; j < m; j++) {
            let course_short = raw[i].reviews[j].course_short;
            let teacher_score = Number(raw[i].reviews[j].teacher_score);
            let hardness_score = Number(raw[i].reviews[j].hardness_score);
            let workamount_score = Number(raw[i].reviews[j].workamount_score);
            let text_review = raw[i].reviews[j].text_review;
            var review = new Review(course_short, teacher_score, hardness_score, workamount_score ,text_review);
            course.addReview(review);
        }
        course.updateScore();
        courses.push(course);
    }
    return courses;
}

//Get data from the localstorage every time a page load.
var courses = parseLocalstorage(localStorage.getItem('courses'));
var active_index = Number(localStorage.getItem('active_index'));