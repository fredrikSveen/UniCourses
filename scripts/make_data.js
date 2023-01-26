//Generate some example data and store it to localstorage
var long_names = ['Personal Development and Team Leadership','Machine Learning and Intelligent Systems','Mobile Communication Systems','Secure Communications','Interaction Design and Development of Modern Web Applications'];
var short_names = ['TeamLead','MALIS','MobSys','SecCom','WebInt'];
var ects_list = [4,5,5,5,2.5];
var courses = []

function ranInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}




//We write this default data to localstorage, and then we will read from localstorage when we show reviews in reviews.js
const itemSet = (localStorage.getItem('courses') == null);

if (itemSet)  {
    //Generating data if it's not already generated.
    for (var i = 0, l = long_names.length; i < l; i++) {
        let webint = new Course(short_names[i], long_names[i], ects_list[i])
        let review001 = new Review(short_names[i], ranInt(1,5), ranInt(1,5), ranInt(1,5), 'Text review');
        let review002 = new Review(short_names[i], ranInt(1,5), ranInt(1,5), ranInt(1,5), 'Another text review');
        let review003 = new Review(short_names[i], ranInt(1,5), ranInt(1,5), ranInt(1,5), 'A third text review');
        webint.addReview(review001);
        webint.addReview(review002);
        webint.addReview(review003);
        webint.updateScore();
        courses.push(webint);
    }

    window.localStorage.setItem('courses', JSON.stringify(courses))
    //To know which course to show, we will keep the index of the active course in the courses array
    window.localStorage.setItem('active_index', JSON.stringify(0))//Set it to 0 as default when opening the webpage
}
