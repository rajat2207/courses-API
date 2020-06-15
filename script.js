var buttonFeild=$('#button-feild');
var contentFeild=$('#content-feild');
var button=$('button');

button.click(function () {
    $.get("https://codingninjas.in/api/v3/courses", function (data) {
        var courses = data.data.courses;
        console.log(courses);
        for(let course of courses) {
            console.log(course.preview_image_url);
            contentFeild.append(`
                <div class="card" style="width:400px; margin: 1rem;">
                    <img class="card-img-top" src="${course.preview_image_url}" alt="..">
                    <div class="card-body">
                        <h4 class="card-title">${course.name}</h4>
                         <p class="card-text">${course.level}</p>
                    </div>
                </div>
            `)
        }
    })
    buttonFeild.remove();
})
