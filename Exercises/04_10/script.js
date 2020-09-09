// constructor
function Book(title,instructor,level,author,views){
	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.author = author;
	this.views = views;
	
	// may also add functions inside of a constructor
	this.updateViews = function(){
	return ++ this.views;
	};
}

//trying to make a Book;
//var BookY13 = new Book("Year 13 - Book", "Mr Young", 3 ," Mr Young", 0);

//Making more than one book and storing
//var BookY12 = new Book("Year 12 - Book", "Mr Young", 3 ," Mr Young", 0);

// fastest way of making more than one varaible
var Books = [
	new Book("Year 13 - Book", "Mr Young", 3 ," Mr Young", 0),
	new Book("Year 12 - Book", "Mr Young", 3 ," Mr Young", 0), 
];

console.log(Books);
// adding views on books
console.log(Books[0].updateViews());

