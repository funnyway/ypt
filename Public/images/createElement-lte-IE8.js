// JavaScript Document
(function(){
var e = "header,nav,section,aside,article,footer".split(','),
i=0,
length=e.length;
while(i<length){
    document.createElement(e[i++])
}
})();