
function chooseUni(uni_index){    
    window.localStorage.setItem('uni_courses_index', JSON.stringify(uni_index))
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