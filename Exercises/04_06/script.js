var first = 7/9;
var sec = 13/25;

var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}(first,sec)


console.log(theBiggest);
