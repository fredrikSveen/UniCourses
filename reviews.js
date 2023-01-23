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
            <div class='flec_container'>
                <p>Teacher score: ${this.teacher_score}</p>
                <p>Text review: ${this.text_review}</p>
                <p>Overall score: ${this.score}</p>
                <p>Written: ${this.date}</p>
            </div>
        `;
        document.getElementById('review_container').appendChild(div1);
    }
}

let review001 = new Review('webint', 4, 3, 3, 'Decent course with a good teacher.');
review001.displayReview();

console.log('test');