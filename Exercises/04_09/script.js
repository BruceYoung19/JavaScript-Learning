// Creating a new object
var course = new Object();

// properties for object - long way
//course.title = "the book of ohm";
//course.instrustor = "Mememe";
//course.level = 32;
//course.publish = 0;

//properties shorter way
var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    };
}

// may also use the dot operator
console.log(course.views);
course.updateViews
console.log(course.views);
