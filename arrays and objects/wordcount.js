var text="hello hai hai hi how are you you hi hi hel lo lo hel"
var wcount={}
// var words=text.split(" ")
// console.log(words);
// for(let w of words){
//     w in wc?wc[w]+=1:wc[w]=1
// }
text.split(" ").map(w=>w in wcount?wcount[w]+=1:wcount[w]=1)
console.log(wcount);