let marks=[45,67,34,12]
let users=['arun','amal','anu','neena']
let stud1=['arun',47,'pass']
//access
console.log(marks[0]);//1st ele
console.log(marks[1]);//2nd ele
console.log("marks array",marks);
//update
marks[0]=55
console.log("marks array after update",marks);//[55,67,34,12]
//new values will be added to index 4
marks[4]=100
console.log("marks array after addition",marks);//[55,67,34,12,100]
marks[10]=77
console.log("marks array after addition",marks);
//deletion
delete marks[0]
console.log("marks array after deletion",marks);
marks.push(67)//adds 67 at the end
console.log("marks array after push",marks);
marks.pop()//remove the last value
console.log("marks array after pop",marks);
//shift & unshift